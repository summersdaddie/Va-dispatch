// Virginia Police Dispatch Tracker - Cloudflare Worker
// Optimized for vadispatch.com deployment

// Import static content (in production, this would be bundled)
const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Virginia Police Dispatch Tracker - Active Calls</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <style>
        * { font-family: 'Inter', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .hero-bg { background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%); }
        .card-shadow { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        .priority-high { border-left: 4px solid #dc2626; }
        .priority-medium { border-left: 4px solid #f59e0b; }
        .priority-low { border-left: 4px solid #059669; }
        .pulse-dot { animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .call-card { transition: all 0.3s ease; }
        .call-card:hover { transform: translateY(-2px); box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1); }
        .filter-panel { transform: translateY(-100%); transition: transform 0.3s ease; }
        .filter-panel.open { transform: translateY(0); }
    </style>
</head>
<body class="bg-gray-50 text-gray-900">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm fixed w-full top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <h1 class="text-xl font-bold text-gray-900">VA Police Dispatch</h1>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a href="/" class="bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Active Calls</a>
                        <a href="/history" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Call History</a>
                        <a href="/departments" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Departments</a>
                    </div>
                </div>
                <div class="md:hidden">
                    <button id="mobile-menu-btn" class="text-gray-600 hover:text-gray-900">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <div class="hero-bg pt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="text-center">
                <h1 class="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                    Virginia Police Dispatch
                    <span class="block text-blue-300">Real-Time Tracker</span>
                </h1>
                <p class="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Monitor active emergency calls, search historical dispatch data, and access comprehensive law enforcement information across Virginia.
                </p>
                <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                    <div class="rounded-md shadow">
                        <a href="#active-calls" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10">
                            View Active Calls
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Stats Overview -->
    <div class="bg-white py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                    <div class="w-3 h-3 bg-red-600 rounded-full pulse-dot"></div>
                                </div>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt class="text-sm font-medium text-gray-500 truncate">Active High Priority</dt>
                                    <dd class="text-lg font-medium text-gray-900" id="high-priority-count">23</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                    <div class="w-3 h-3 bg-orange-500 rounded-full pulse-dot"></div>
                                </div>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt class="text-sm font-medium text-gray-500 truncate">Active Medium Priority</dt>
                                    <dd class="text-lg font-medium text-gray-900" id="medium-priority-count">47</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <div class="w-3 h-3 bg-green-600 rounded-full pulse-dot"></div>
                                </div>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt class="text-sm font-medium text-gray-500 truncate">Active Low Priority</dt>
                                    <dd class="text-lg font-medium text-gray-900" id="low-priority-count">156</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt class="text-sm font-medium text-gray-500 truncate">Avg Response Time</dt>
                                    <dd class="text-lg font-medium text-gray-900">8.2 min</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Active Calls Section -->
    <div id="active-calls" class="py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Filters -->
            <div class="mb-8">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h2 class="text-2xl font-bold text-gray-900">Active Calls</h2>
                    <div class="mt-4 sm:mt-0 flex items-center space-x-4">
                        <button id="filter-toggle" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                            </svg>
                            Filters
                        </button>
                        <button id="auto-refresh" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                            </svg>
                            Auto-Refresh: On
                        </button>
                        <button id="map-view-toggle" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                            </svg>
                            Map View
                        </button>
                    </div>
                </div>

                <!-- Filter Panel -->
                <div id="filter-panel" class="hidden mt-4 bg-white p-4 rounded-lg shadow">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Department</label>
                            <select id="department-filter" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">All Departments</option>
                                <option value="fairfax-police">Fairfax County Police</option>
                                <option value="richmond-police">Richmond Police</option>
                                <option value="virginia-beach-police">Virginia Beach Police</option>
                                <option value="norfolk-police">Norfolk Police</option>
                                <option value="chesapeake-police">Chesapeake Police</option>
                                <option value="arlington-police">Arlington County Police</option>
                                <option value="hampton-police">Hampton Police</option>
                                <option value="alexandria-police">Alexandria Police</option>
                                <option value="arlington-sheriff">Arlington County Sheriff</option>
                                <option value="fairfax-sheriff">Fairfax County Sheriff</option>
                                <option value="albemarle-sheriff">Albemarle County Sheriff</option>
                                <option value="accomack-sheriff">Accomack County Sheriff</option>
                                <option value="bedford-sheriff">Bedford County Sheriff</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Call Type</label>
                            <select id="call-type-filter" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">All Types</option>
                                <option value="disturbance">Disturbance</option>
                                <option value="traffic">Traffic Incident</option>
                                <option value="theft">Theft/Robbery</option>
                                <option value="domestic">Domestic Dispute</option>
                                <option value="suspicious">Suspicious Activity</option>
                                <option value="medical">Medical Emergency</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                            <select id="priority-filter" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">All Priorities</option>
                                <option value="high">High Priority</option>
                                <option value="medium">Medium Priority</option>
                                <option value="low">Low Priority</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                            <select id="sort-filter" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="time">Dispatch Time</option>
                                <option value="priority">Priority Level</option>
                                <option value="department">Department</option>
                            </select>
                        </div>
                    </div>
                    <div class="mt-4 flex justify-end">
                        <button id="apply-filters" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Apply Filters</button>
                    </div>
                </div>
            </div>

            <!-- Calls Grid -->
            <div id="calls-grid" class="grid grid-cols-1 gap-6">
                <!-- Call cards will be populated by JavaScript -->
            </div>

            <!-- Map View -->
            <div id="map-view" class="hidden">
                <div id="map" class="w-full h-96 rounded-lg shadow-lg"></div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <p class="text-sm">&copy; 2025 Virginia Police Dispatch Tracker. Public safety information for community awareness.</p>
            </div>
        </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>`;

// Worker handler
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    
    // Handle different routes
    switch (path) {
      case '/':
      case '/index.html':
        return new Response(INDEX_HTML, {
          headers: { 
            'Content-Type': 'text/html',
            'Cache-Control': 'public, max-age=3600'
          }
        });
      
      case '/history':
      case '/history.html':
        return new Response(HISTORY_HTML, {
          headers: { 
            'Content-Type': 'text/html',
            'Cache-Control': 'public, max-age=3600'
          }
        });
      
      case '/departments':
      case '/departments.html':
        return new Response(DEPARTMENTS_HTML, {
          headers: { 
            'Content-Type': 'text/html',
            'Cache-Control': 'public, max-age=3600'
          }
        });
      
      case '/main.js':
        return new Response(MAIN_JS, {
          headers: { 
            'Content-Type': 'application/javascript',
            'Cache-Control': 'public, max-age=31536000, immutable'
          }
        });
      
      default:
        // Redirect to index for unknown routes
        return new Response(INDEX_HTML, {
          headers: { 
            'Content-Type': 'text/html',
            'Cache-Control': 'public, max-age=3600'
          }
        });
    }
  }
};

// Static content would be embedded here in production
const HISTORY_HTML = `<!DOCTYPE html><html><head><title>History - VA Police Dispatch</title></head><body>History Page Content</body></html>`;
const DEPARTMENTS_HTML = `<!DOCTYPE html><html><head><title>Departments - VA Police Dispatch</title></head><body>Departments Page Content</body></html>`;
const MAIN_JS = `// JavaScript content would be embedded here`;