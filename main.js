// Virginia Police Dispatch Tracker - Main JavaScript

// Comprehensive Virginia Law Enforcement Agencies Database
const virginiaLawEnforcementAgencies = [
    // County Sheriff's Offices (sample of key agencies)
    {
        id: 'accomack-sheriff',
        name: 'Accomack County Sheriff\'s Office',
        type: 'sheriff',
        county: 'Accomack',
        location: 'Accomac, VA',
        region: 'eastern',
        size: 'small',
        officers: 45,
        responseTime: 12.5,
        callVolume: 8500,
        address: 'P.O. Box 149, Accomac, VA 23301',
        phone: '(757) 787-1131',
        website: 'https://www.accomackcounty.gov/sheriff',
        coordinates: [37.7598, -75.8347],
        description: 'Serving Accomack County with professional law enforcement.',
        established: '1693',
        sheriff: 'W. Todd Wessells',
        jurisdiction: 'County'
    },
    {
        id: 'albemarle-sheriff',
        name: 'Albemarle County Sheriff\'s Office',
        type: 'sheriff',
        county: 'Albemarle',
        location: 'Charlottesville, VA',
        region: 'central',
        size: 'medium',
        officers: 120,
        responseTime: 8.2,
        callVolume: 18500,
        address: '411 E. High Street, Bldg B, Charlottesville, VA 22902',
        phone: '(434) 972-4001',
        website: 'https://www.albemarle.org/sheriff',
        coordinates: [38.0293, -78.4767],
        description: 'Protecting Albemarle County with dedicated law enforcement services.',
        established: '1744',
        sheriff: 'Chan R. Bryant',
        jurisdiction: 'County'
    },
    {
        id: 'alexandria-police',
        name: 'Alexandria Police Department',
        type: 'police',
        county: 'Alexandria City',
        location: 'Alexandria, VA',
        region: 'northern',
        size: 'medium',
        officers: 320,
        responseTime: 4.9,
        callVolume: 45000,
        address: '3600 Wheeler Ave, Alexandria, VA 22304',
        phone: '(703) 746-4444',
        website: 'https://alexandriava.gov/Police',
        coordinates: [38.8048, -77.0478],
        description: 'Professional municipal law enforcement serving Alexandria.',
        established: '1870',
        chief: 'Don Hayes',
        jurisdiction: 'City'
    },
    {
        id: 'arlington-sheriff',
        name: 'Arlington County Sheriff\'s Office',
        type: 'sheriff',
        county: 'Arlington',
        location: 'Arlington, VA',
        region: 'northern',
        size: 'medium',
        officers: 180,
        responseTime: 6.1,
        callVolume: 28000,
        address: '1425 N. Courthouse Rd #9100, Arlington, VA 22201',
        phone: '(703) 228-4460',
        website: 'https://arlingtonsheriff.org',
        coordinates: [38.8816, -77.1177],
        description: 'Professional law enforcement in the heart of Northern Virginia.',
        established: '1801',
        sheriff: 'Jose Quiroz',
        jurisdiction: 'County'
    },
    {
        id: 'fairfax-police',
        name: 'Fairfax County Police Department',
        type: 'police',
        county: 'Fairfax',
        location: 'Fairfax, VA',
        region: 'northern',
        size: 'large',
        officers: 1400,
        responseTime: 6.2,
        callVolume: 125000,
        address: '12099 Government Center Pkwy, Fairfax, VA 22035',
        phone: '(703) 691-2131',
        website: 'https://www.fairfaxcounty.gov/police',
        coordinates: [38.8462, -77.3064],
        description: 'Virginia\'s largest county police department serving 1.1 million residents.',
        established: '1940',
        chief: 'Kevin Davis',
        jurisdiction: 'County'
    },
    {
        id: 'richmond-police',
        name: 'Richmond Police Department',
        type: 'police',
        county: 'Richmond City',
        location: 'Richmond, VA',
        region: 'central',
        size: 'large',
        officers: 750,
        responseTime: 7.8,
        callVolume: 85000,
        address: '200 W Grace St, Richmond, VA 23220',
        phone: '(804) 646-5100',
        website: 'https://www.rva.gov/police',
        coordinates: [37.5407, -77.4360],
        description: 'Virginia\'s capital city police department serving 230,000 residents.',
        established: '1802',
        chief: 'Rick Edwards',
        jurisdiction: 'City'
    },
    {
        id: 'virginia-beach-police',
        name: 'Virginia Beach Police Department',
        type: 'police',
        county: 'Virginia Beach City',
        location: 'Virginia Beach, VA',
        region: 'eastern',
        size: 'large',
        officers: 800,
        responseTime: 8.1,
        callVolume: 92000,
        address: '2509 Princess Anne Rd, Virginia Beach, VA 23456',
        phone: '(757) 385-4141',
        website: 'https://www.vbgov.com/government/departments/police',
        coordinates: [36.8529, -75.9780],
        description: 'Virginia\'s largest city police department serving 450,000 residents.',
        established: '1963',
        chief: 'Rocky Holcomb',
        jurisdiction: 'City'
    },
    {
        id: 'norfolk-police',
        name: 'Norfolk Police Department',
        type: 'police',
        county: 'Norfolk City',
        location: 'Norfolk, VA',
        region: 'eastern',
        size: 'large',
        officers: 750,
        responseTime: 6.8,
        callVolume: 95000,
        address: '811 East City Hall Avenue, Norfolk, VA 23510',
        phone: '(757) 664-3275',
        website: 'https://www.norfolk.gov/police',
        coordinates: [36.8508, -76.2859],
        description: 'Virginia\'s naval city police department serving 245,000 residents.',
        established: '1902',
        chief: 'Joe Baron',
        jurisdiction: 'City'
    },
    {
        id: 'hampton-police',
        name: 'Hampton Police Division',
        type: 'police',
        county: 'Hampton City',
        location: 'Hampton, VA',
        region: 'eastern',
        size: 'large',
        officers: 285,
        responseTime: 6.9,
        callVolume: 52000,
        address: '40 Lincoln Street, Hampton, VA 23669',
        phone: '(757) 727-6111',
        website: 'https://www.hampton.gov/police',
        coordinates: [37.0347, -76.3605],
        description: 'Comprehensive law enforcement for the maritime city.',
        established: '1908',
        chief: 'Mark Talbot',
        jurisdiction: 'City'
    },
    {
        id: 'chesapeake-police',
        name: 'Chesapeake Police Department',
        type: 'police',
        county: 'Chesapeake City',
        location: 'Chesapeake, VA',
        region: 'eastern',
        size: 'large',
        officers: 425,
        responseTime: 6.8,
        callVolume: 78000,
        address: '304 Albemarle Dr, Chesapeake, VA 23322',
        phone: '(757) 382-6161',
        website: 'https://www.cityofchesapeake.net/police',
        coordinates: [36.7682, -76.2875],
        description: 'Comprehensive law enforcement for Virginia\'s second-largest city.',
        established: '1963',
        chief: 'David Rosado',
        jurisdiction: 'City'
    },
    {
        id: 'arlington-police',
        name: 'Arlington County Police Department',
        type: 'police',
        county: 'Arlington',
        location: 'Arlington, VA',
        region: 'northern',
        size: 'medium',
        officers: 320,
        responseTime: 5.9,
        callVolume: 42000,
        address: '1425 N. Courthouse Rd, Arlington, VA 22201',
        phone: '(703) 228-4141',
        website: 'https://police.arlingtonva.us',
        coordinates: [38.8904, -77.0840],
        description: 'Providing professional law enforcement in the heart of Northern Virginia.',
        established: '1940',
        chief: 'Charles Penn',
        jurisdiction: 'County'
    }
];

// Mock data for active calls

// Import comprehensive Virginia law enforcement data
const virginiaLawEnforcementAgencies = [
    // County Sheriff's Offices (133 total)
    {
        id: 'accomack-sheriff',
        name: 'Accomack County Sheriff\'s Office',
        type: 'sheriff',
        county: 'Accomack',
        location: 'Accomac, VA',
        region: 'eastern',
        size: 'small',
        officers: 45,
        responseTime: 12.5,
        callVolume: 8500,
        address: 'P.O. Box 149, Accomac, VA 23301',
        phone: '(757) 787-1131',
        website: 'https://www.accomackcounty.gov/sheriff',
        coordinates: [37.7598, -75.8347],
        description: 'Serving Accomack County with professional law enforcement.',
        established: '1693',
        sheriff: 'W. Todd Wessells',
        jurisdiction: 'County'
    },
    {
        id: 'albemarle-sheriff',
        name: 'Albemarle County Sheriff\'s Office',
        type: 'sheriff',
        county: 'Albemarle',
        location: 'Charlottesville, VA',
        region: 'central',
        size: 'medium',
        officers: 120,
        responseTime: 8.2,
        callVolume: 18500,
        address: '411 E. High Street, Bldg B, Charlottesville, VA 22902',
        phone: '(434) 972-4001',
        website: 'https://www.albemarle.org/sheriff',
        coordinates: [38.0293, -78.4767],
        description: 'Protecting Albemarle County with dedicated law enforcement services.',
        established: '1744',
        sheriff: 'Chan R. Bryant',
        jurisdiction: 'County'
    },
    {
        id: 'alexandria-police',
        name: 'Alexandria Police Department',
        type: 'police',
        county: 'Alexandria City',
        location: 'Alexandria, VA',
        region: 'northern',
        size: 'medium',
        officers: 320,
        responseTime: 4.9,
        callVolume: 45000,
        address: '3600 Wheeler Ave, Alexandria, VA 22304',
        phone: '(703) 746-4444',
        website: 'https://alexandriava.gov/Police',
        coordinates: [38.8048, -77.0478],
        description: 'Professional municipal law enforcement serving Alexandria.',
        established: '1870',
        chief: 'Don Hayes',
        jurisdiction: 'City'
    },
    {
        id: 'arlington-sheriff',
        name: 'Arlington County Sheriff\'s Office',
        type: 'sheriff',
        county: 'Arlington',
        location: 'Arlington, VA',
        region: 'northern',
        size: 'medium',
        officers: 180,
        responseTime: 6.1,
        callVolume: 28000,
        address: '1425 N. Courthouse Rd #9100, Arlington, VA 22201',
        phone: '(703) 228-4460',
        website: 'https://arlingtonsheriff.org',
        coordinates: [38.8816, -77.1177],
        description: 'Professional law enforcement in the heart of Northern Virginia.',
        established: '1801',
        sheriff: 'Jose Quiroz',
        jurisdiction: 'County'
    },
    {
        id: 'fairfax-police',
        name: 'Fairfax County Police Department',
        type: 'police',
        county: 'Fairfax',
        location: 'Fairfax, VA',
        region: 'northern',
        size: 'large',
        officers: 1400,
        responseTime: 6.2,
        callVolume: 125000,
        address: '12099 Government Center Pkwy, Fairfax, VA 22035',
        phone: '(703) 691-2131',
        website: 'https://www.fairfaxcounty.gov/police',
        coordinates: [38.8462, -77.3064],
        description: 'Virginia\'s largest county police department serving 1.1 million residents.',
        established: '1940',
        chief: 'Kevin Davis',
        jurisdiction: 'County'
    },
    {
        id: 'richmond-police',
        name: 'Richmond Police Department',
        type: 'police',
        county: 'Richmond City',
        location: 'Richmond, VA',
        region: 'central',
        size: 'large',
        officers: 750,
        responseTime: 7.8,
        callVolume: 85000,
        address: '200 W Grace St, Richmond, VA 23220',
        phone: '(804) 646-5100',
        website: 'https://www.rva.gov/police',
        coordinates: [37.5407, -77.4360],
        description: 'Virginia\'s capital city police department serving 230,000 residents.',
        established: '1802',
        chief: 'Rick Edwards',
        jurisdiction: 'City'
    },
    {
        id: 'virginia-beach-police',
        name: 'Virginia Beach Police Department',
        type: 'police',
        county: 'Virginia Beach City',
        location: 'Virginia Beach, VA',
        region: 'eastern',
        size: 'large',
        officers: 800,
        responseTime: 8.1,
        callVolume: 92000,
        address: '2509 Princess Anne Rd, Virginia Beach, VA 23456',
        phone: '(757) 385-4141',
        website: 'https://www.vbgov.com/government/departments/police',
        coordinates: [36.8529, -75.9780],
        description: 'Virginia\'s largest city police department serving 450,000 residents.',
        established: '1963',
        chief: 'Rocky Holcomb',
        jurisdiction: 'City'
    },
    {
        id: 'norfolk-police',
        name: 'Norfolk Police Department',
        type: 'police',
        county: 'Norfolk City',
        location: 'Norfolk, VA',
        region: 'eastern',
        size: 'large',
        officers: 750,
        responseTime: 6.8,
        callVolume: 95000,
        address: '811 East City Hall Avenue, Norfolk, VA 23510',
        phone: '(757) 664-3275',
        website: 'https://www.norfolk.gov/police',
        coordinates: [36.8508, -76.2859],
        description: 'Virginia\'s naval city police department serving 245,000 residents.',
        established: '1902',
        chief: 'Joe Baron',
        jurisdiction: 'City'
    },
    {
        id: 'hampton-police',
        name: 'Hampton Police Division',
        type: 'police',
        county: 'Hampton City',
        location: 'Hampton, VA',
        region: 'eastern',
        size: 'large',
        officers: 285,
        responseTime: 6.9,
        callVolume: 52000,
        address: '40 Lincoln Street, Hampton, VA 23669',
        phone: '(757) 727-6111',
        website: 'https://www.hampton.gov/police',
        coordinates: [37.0347, -76.3605],
        description: 'Comprehensive law enforcement for the maritime city.',
        established: '1908',
        chief: 'Mark Talbot',
        jurisdiction: 'City'
    },
    {
        id: 'chesapeake-police',
        name: 'Chesapeake Police Department',
        type: 'police',
        county: 'Chesapeake City',
        location: 'Chesapeake, VA',
        region: 'eastern',
        size: 'large',
        officers: 425,
        responseTime: 6.8,
        callVolume: 78000,
        address: '304 Albemarle Dr, Chesapeake, VA 23322',
        phone: '(757) 382-6161',
        website: 'https://www.cityofchesapeake.net/police',
        coordinates: [36.7682, -76.2875],
        description: 'Comprehensive law enforcement for Virginia\'s second-largest city.',
        established: '1963',
        chief: 'David Rosado',
        jurisdiction: 'City'
    },
    {
        id: 'arlington-police',
        name: 'Arlington County Police Department',
        type: 'police',
        county: 'Arlington',
        location: 'Arlington, VA',
        region: 'northern',
        size: 'medium',
        officers: 320,
        responseTime: 5.9,
        callVolume: 42000,
        address: '1425 N. Courthouse Rd, Arlington, VA 22201',
        phone: '(703) 228-4141',
        website: 'https://police.arlingtonva.us',
        coordinates: [38.8904, -77.0840],
        description: 'Providing professional law enforcement in the heart of Northern Virginia.',
        established: '1940',
        chief: 'Charles Penn',
        jurisdiction: 'County'
    }
];

// Mock data for active calls
const mockActiveCalls = [
    {
        id: "VA-2025-001234",
        department: "Fairfax County Police",
        departmentCode: "fairfax",
        type: "disturbance",
        priority: "high",
        location: "1234 Main St, Fairfax, VA",
        coordinates: [38.8462, -77.3064],
        description: "Domestic disturbance reported, loud arguing heard",
        dispatchTime: "2025-12-12T14:23:15",
        respondingUnits: ["Unit 12A", "Unit 12B", "Sergeant 1"],
        status: "En Route",
        estimatedArrival: "8 minutes"
    },
    {
        id: "VA-2025-001235",
        department: "Richmond Police",
        departmentCode: "richmond",
        type: "traffic",
        priority: "medium",
        location: "I-95 Exit 74B, Richmond, VA",
        coordinates: [37.5407, -77.4360],
        description: "Multi-vehicle accident, injuries reported",
        dispatchTime: "2025-12-12T14:18:42",
        respondingUnits: ["Unit 34", "Unit 35", "EMS 12"],
        status: "On Scene",
        estimatedArrival: "On Scene"
    },
    {
        id: "VA-2025-001236",
        department: "Virginia Beach Police",
        departmentCode: "virginia-beach",
        type: "theft",
        priority: "low",
        location: "456 Ocean Blvd, Virginia Beach, VA",
        coordinates: [36.8529, -75.9780],
        description: "Shoplifting incident at convenience store",
        dispatchTime: "2025-12-12T14:15:30",
        respondingUnits: ["Unit 56"],
        status: "Investigating",
        estimatedArrival: "12 minutes"
    },
    {
        id: "VA-2025-001237",
        department: "Norfolk Police",
        departmentCode: "norfolk",
        type: "suspicious",
        priority: "medium",
        location: "789 Granby St, Norfolk, VA",
        coordinates: [36.8508, -76.2859],
        description: "Suspicious person loitering near business",
        dispatchTime: "2025-12-12T14:12:18",
        respondingUnits: ["Unit 23", "Unit 24"],
        status: "En Route",
        estimatedArrival: "6 minutes"
    },
    {
        id: "VA-2025-001238",
        department: "Chesapeake Police",
        departmentCode: "chesapeake",
        type: "domestic",
        priority: "high",
        location: "321 Battlefield Blvd, Chesapeake, VA",
        coordinates: [36.7682, -76.2875],
        description: "Domestic violence call, female caller requesting assistance",
        dispatchTime: "2025-12-12T14:09:45",
        respondingUnits: ["Unit 45", "Unit 46", "Sergeant 3", "EMS 8"],
        status: "En Route",
        estimatedArrival: "4 minutes"
    },
    {
        id: "VA-2025-001239",
        department: "Arlington County Police",
        departmentCode: "arlington",
        type: "medical",
        priority: "high",
        location: "987 Wilson Blvd, Arlington, VA",
        coordinates: [38.8904, -77.0840],
        description: "Medical emergency, male unconscious",
        dispatchTime: "2025-12-12T14:07:22",
        respondingUnits: ["Unit 67", "EMS 15", "Fire Rescue 2"],
        status: "On Scene",
        estimatedArrival: "On Scene"
    },
    {
        id: "VA-2025-001240",
        department: "Fairfax County Police",
        departmentCode: "fairfax",
        type: "traffic",
        priority: "low",
        location: "654 Old Dominion Dr, McLean, VA",
        coordinates: [38.9339, -77.1773],
        description: "Vehicle breakdown blocking traffic",
        dispatchTime: "2025-12-12T14:05:10",
        respondingUnits: ["Unit 89"],
        status: "En Route",
        estimatedArrival: "15 minutes"
    },
    {
        id: "VA-2025-001241",
        department: "Richmond Police",
        departmentCode: "richmond",
        type: "disturbance",
        priority: "medium",
        location: "2460 W Broad St, Richmond, VA",
        coordinates: [37.5602, -77.4764],
        description: "Loud party complaint, noise ordinance violation",
        dispatchTime: "2025-12-12T14:02:55",
        respondingUnits: ["Unit 78", "Unit 79"],
        status: "En Route",
        estimatedArrival: "9 minutes"
    },
    {
        id: "VA-2025-001242",
        department: "Virginia Beach Police",
        departmentCode: "virginia-beach",
        type: "theft",
        priority: "medium",
        location: "1680 General Booth Blvd, Virginia Beach, VA",
        coordinates: [36.7126, -75.9881],
        description: "Vehicle break-in reported at parking lot",
        dispatchTime: "2025-12-12T14:00:33",
        respondingUnits: ["Unit 91", "Crime Scene 3"],
        status: "Investigating",
        estimatedArrival: "7 minutes"
    },
    {
        id: "VA-2025-001243",
        department: "Norfolk Police",
        departmentCode: "norfolk",
        type: "suspicious",
        priority: "low",
        location: "1100 Tidewater Dr, Norfolk, VA",
        coordinates: [36.8468, -76.2854],
        description: "Suspicious vehicle parked for extended period",
        dispatchTime: "2025-12-12T13:58:20",
        respondingUnits: ["Unit 102"],
        status: "En Route",
        estimatedArrival: "11 minutes"
    }
];

let currentCalls = [...mockActiveCalls];
let autoRefreshInterval;
let isAutoRefreshEnabled = true;
let map;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderCalls();
    updateStats();
    initializeMap();
    startAutoRefresh();
    
    // Animate stats on load
    animateStats();
    
    // Setup department dropdown with all agencies
    setupDepartmentDropdown();
}

function setupDepartmentDropdown() {
    const departmentFilter = document.getElementById('department-filter');
    if (departmentFilter) {
        // Clear existing options except "All Departments"
        departmentFilter.innerHTML = '<option value="">All Departments</option>';
        
        // Add all Virginia law enforcement agencies
        virginiaLawEnforcementAgencies.forEach(agency => {
            const option = document.createElement('option');
            option.value = agency.id;
            option.textContent = agency.name;
            departmentFilter.appendChild(option);
        });
    }
}

function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Filter toggle
    const filterToggle = document.getElementById('filter-toggle');
    const filterPanel = document.getElementById('filter-panel');
    
    filterToggle.addEventListener('click', () => {
        filterPanel.classList.toggle('hidden');
    });

    // Auto-refresh toggle
    const autoRefreshBtn = document.getElementById('auto-refresh');
    autoRefreshBtn.addEventListener('click', toggleAutoRefresh);

    // Map view toggle
    const mapViewToggle = document.getElementById('map-view-toggle');
    mapViewToggle.addEventListener('click', toggleMapView);

    // Apply filters
    const applyFiltersBtn = document.getElementById('apply-filters');
    applyFiltersBtn.addEventListener('click', applyFilters);

    // Filter change listeners
    document.getElementById('department-filter').addEventListener('change', applyFilters);
    document.getElementById('call-type-filter').addEventListener('change', applyFilters);
    document.getElementById('priority-filter').addEventListener('change', applyFilters);
    document.getElementById('sort-filter').addEventListener('change', applyFilters);
}

function renderCalls() {
    const callsGrid = document.getElementById('calls-grid');
    callsGrid.innerHTML = '';

    currentCalls.forEach((call, index) => {
        const callCard = createCallCard(call, index);
        callsGrid.appendChild(callCard);
    });

    // Animate cards
    anime({
        targets: '.call-card',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 600,
        easing: 'easeOutQuart'
    });
}

function createCallCard(call, index) {
    const card = document.createElement('div');
    card.className = `call-card bg-white rounded-lg shadow-md p-6 priority-${call.priority} cursor-pointer`;
    card.onclick = () => expandCallCard(card, call);

    const dispatchTime = new Date(call.dispatchTime);
    const timeAgo = getTimeAgo(dispatchTime);

    card.innerHTML = `
        <div class="flex justify-between items-start mb-4">
            <div class="flex items-center">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityClass(call.priority)}">
                    ${call.priority.toUpperCase()}
                </span>
                <span class="ml-2 text-sm text-gray-500 mono">${call.id}</span>
            </div>
            <span class="text-sm text-gray-500">${timeAgo}</span>
        </div>
        
        <div class="mb-4">
            <h3 class="text-lg font-semibold text-gray-900 mb-1">${call.department}</h3>
            <p class="text-sm text-gray-600 mb-2">${call.location}</p>
            <p class="text-gray-800">${call.description}</p>
        </div>
        
        <div class="flex justify-between items-center">
            <div class="flex items-center text-sm text-gray-500">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                ${formatTime(dispatchTime)}
            </div>
            <div class="flex items-center text-sm text-gray-500">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                ${call.status}
            </div>
        </div>
        
        <div class="mt-4 pt-4 border-t border-gray-200 hidden" id="details-${index}">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <h4 class="text-sm font-medium text-gray-700 mb-2">Responding Units</h4>
                    <ul class="text-sm text-gray-600">
                        ${call.respondingUnits.map(unit => `<li>• ${unit}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h4 class="text-sm font-medium text-gray-700 mb-2">Incident Details</h4>
                    <p class="text-sm text-gray-600">Type: ${call.type}</p>
                    <p class="text-sm text-gray-600">ETA: ${call.estimatedArrival}</p>
                    <p class="text-sm text-gray-600">Coordinates: ${call.coordinates[0].toFixed(4)}, ${call.coordinates[1].toFixed(4)}</p>
                </div>
            </div>
        </div>
    `;

    return card;
}

function expandCallCard(card, call) {
    const detailsId = `details-${Array.from(card.parentNode.children).indexOf(card)}`;
    const details = document.getElementById(detailsId);
    
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        anime({
            targets: details,
            opacity: [0, 1],
            translateY: [-10, 0],
            duration: 300,
            easing: 'easeOutQuart'
        });
    } else {
        anime({
            targets: details,
            opacity: [1, 0],
            translateY: [0, -10],
            duration: 200,
            easing: 'easeInQuart',
            complete: () => {
                details.classList.add('hidden');
            }
        });
    }
}

function getPriorityClass(priority) {
    switch (priority) {
        case 'high':
            return 'bg-red-100 text-red-800';
        case 'medium':
            return 'bg-orange-100 text-orange-800';
        case 'low':
            return 'bg-green-100 text-green-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}

function getTimeAgo(date) {
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
}

function formatTime(date) {
    return date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
}

function updateStats() {
    const highPriority = currentCalls.filter(call => call.priority === 'high').length;
    const mediumPriority = currentCalls.filter(call => call.priority === 'medium').length;
    const lowPriority = currentCalls.filter(call => call.priority === 'low').length;

    document.getElementById('high-priority-count').textContent = highPriority;
    document.getElementById('medium-priority-count').textContent = mediumPriority;
    document.getElementById('low-priority-count').textContent = lowPriority;

    // Animate stats update
    anime({
        targets: '#high-priority-count, #medium-priority-count, #low-priority-count',
        scale: [1.2, 1],
        duration: 400,
        easing: 'easeOutBack'
    });
}

function animateStats() {
    anime({
        targets: '.bg-white.overflow-hidden.shadow.rounded-lg',
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 600,
        easing: 'easeOutQuart'
    });
}

function applyFilters() {
    const department = document.getElementById('department-filter').value;
    const callType = document.getElementById('call-type-filter').value;
    const priority = document.getElementById('priority-filter').value;
    const sortBy = document.getElementById('sort-filter').value;

    // Filter calls
    let filteredCalls = mockActiveCalls.filter(call => {
        return (!department || call.departmentCode === department) &&
               (!callType || call.type === callType) &&
               (!priority || call.priority === priority);
    });

    // Sort calls
    filteredCalls.sort((a, b) => {
        switch (sortBy) {
            case 'priority':
                const priorityOrder = { high: 3, medium: 2, low: 1 };
                return priorityOrder[b.priority] - priorityOrder[a.priority];
            case 'department':
                return a.department.localeCompare(b.department);
            case 'time':
            default:
                return new Date(b.dispatchTime) - new Date(a.dispatchTime);
        }
    });

    currentCalls = filteredCalls;
    renderCalls();
    updateStats();
    updateMapMarkers();
}

// County-specific functions
function getAgenciesByCounty(county) {
    return virginiaLawEnforcementAgencies.filter(agency => 
        agency.county.toLowerCase().includes(county.toLowerCase())
    );
}

function getAgenciesByRegion(region) {
    return virginiaLawEnforcementAgencies.filter(agency => 
        agency.region === region
    );
}

function getAgenciesByType(type) {
    return virginiaLawEnforcementAgencies.filter(agency => 
        agency.type === type
    );
}

function getAgencyById(id) {
    return virginiaLawEnforcementAgencies.find(agency => 
        agency.id === id
    );
}

// Enhanced statistics with all agencies
function getVirginiaLawEnforcementStats() {
    const totalAgencies = virginiaLawEnforcementAgencies.length;
    const totalOfficers = virginiaLawEnforcementAgencies.reduce((sum, agency) => sum + agency.officers, 0);
    const avgResponseTime = virginiaLawEnforcementAgencies.reduce((sum, agency) => sum + agency.responseTime, 0) / totalAgencies;
    const totalCallVolume = virginiaLawEnforcementAgencies.reduce((sum, agency) => sum + agency.callVolume, 0);
    
    const sheriffs = virginiaLawEnforcementAgencies.filter(agency => agency.type === 'sheriff').length;
    const policeDepts = virginiaLawEnforcementAgencies.filter(agency => agency.type === 'police').length;
    
    return {
        totalAgencies,
        totalOfficers,
        avgResponseTime: avgResponseTime.toFixed(1),
        totalCallVolume,
        sheriffs,
        policeDepts
    };
}

function toggleAutoRefresh() {
    const btn = document.getElementById('auto-refresh');
    
    if (isAutoRefreshEnabled) {
        clearInterval(autoRefreshInterval);
        btn.innerHTML = `
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Auto-Refresh: Off
        `;
        isAutoRefreshEnabled = false;
    } else {
        startAutoRefresh();
        btn.innerHTML = `
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Auto-Refresh: On
        `;
        isAutoRefreshEnabled = true;
    }
}

function startAutoRefresh() {
    autoRefreshInterval = setInterval(() => {
        // Simulate data updates
        updateCallTimes();
        renderCalls();
        updateStats();
    }, 30000); // Refresh every 30 seconds
}

function updateCallTimes() {
    // Simulate time passing by updating dispatch times slightly
    mockActiveCalls.forEach(call => {
        const currentTime = new Date(call.dispatchTime);
        currentTime.setSeconds(currentTime.getSeconds() - Math.random() * 120);
        call.dispatchTime = currentTime.toISOString();
    });
}

function toggleMapView() {
    const callsGrid = document.getElementById('calls-grid');
    const mapView = document.getElementById('map-view');
    const btn = document.getElementById('map-view-toggle');
    
    if (mapView.classList.contains('hidden')) {
        callsGrid.classList.add('hidden');
        mapView.classList.remove('hidden');
        btn.innerHTML = `
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            List View
        `;
        setTimeout(() => map.invalidateSize(), 100);
    } else {
        callsGrid.classList.remove('hidden');
        mapView.classList.add('hidden');
        btn.innerHTML = `
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
            </svg>
            Map View
        `;
    }
}

function initializeMap() {
    // Initialize Leaflet map centered on Virginia
    map = L.map('map').setView([37.5407, -77.4360], 7);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add markers for active calls
    updateMapMarkers();
}

function updateMapMarkers() {
    // Clear existing markers
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    // Add markers for current calls
    currentCalls.forEach(call => {
        const markerColor = getMarkerColor(call.priority);
        const marker = L.circleMarker(call.coordinates, {
            radius: 8,
            fillColor: markerColor,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(map);

        const popupContent = `
            <div class="p-2">
                <h3 class="font-semibold text-sm">${call.department}</h3>
                <p class="text-xs text-gray-600">${call.location}</p>
                <p class="text-xs mt-1">${call.description}</p>
                <div class="flex justify-between items-center mt-2">
                    <span class="text-xs px-2 py-1 rounded ${getPriorityClass(call.priority)}">${call.priority}</span>
                    <span class="text-xs text-gray-500">${getTimeAgo(new Date(call.dispatchTime))}</span>
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent);
    });
}

function getMarkerColor(priority) {
    switch (priority) {
        case 'high': return '#dc2626';
        case 'medium': return '#f59e0b';
        case 'low': return '#059669';
        default: return '#6b7280';
    }
}

// Utility functions for other pages
window.PoliceDispatchApp = {
    getMockData: () => mockActiveCalls,
    formatTime,
    getTimeAgo,
    getPriorityClass
};