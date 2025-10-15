// FACT NFC Demo - Interactive Product Verification Demo
class NFCDemo {
    constructor() {
        this.currentView = 'scan';
        this.nfcSupported = false;
        this.scanning = false;
        this.selectedProduct = null;
        this.menuOpen = false;
        this.currentLanguage = 'en';
        
        // Mock product data
        this.mockProduct = {
            id: 'NFC-ALC-2024-891234',
            name: 'Premium Whiskey 750ml',
            brand: 'Highland Reserve',
            status: 'verified',
            currentLocation: 'Bar do João - São Paulo',
            manufactured: '2024-08-15',
            bottleNumber: '42891',
            batchNumber: 'BTH-2024-Q3-089',
            journey: [
                {
                    stage: 'Manufacturing',
                    location: 'Highland Distillery, Scotland',
                    timestamp: '2024-08-15T10:30:00Z',
                    operator: 'John MacLeod',
                    documents: ['PO-MFG-8912', 'Quality Certificate'],
                    status: 'completed'
                },
                {
                    stage: 'Warehouse',
                    location: 'Central Distribution - Glasgow',
                    timestamp: '2024-08-16T14:20:00Z',
                    operator: 'Sarah Connor',
                    documents: ['PO-WH-4523', 'Transport Invoice'],
                    status: 'completed'
                },
                {
                    stage: 'International Shipping',
                    location: 'Port of Santos, Brazil',
                    timestamp: '2024-09-02T09:15:00Z',
                    operator: 'Customs Officer #4521',
                    documents: ['Nota Fiscal 89234', 'Import License', 'PO-IMP-7821'],
                    status: 'completed'
                },
                {
                    stage: 'Distributor',
                    location: 'Premium Spirits Distribution - São Paulo',
                    timestamp: '2024-09-05T11:00:00Z',
                    operator: 'Carlos Silva',
                    documents: ['PO-DIST-1129', 'Nota Fiscal 91245'],
                    status: 'completed'
                },
                {
                    stage: 'Retail/Point of Sale',
                    location: 'Bar do João - São Paulo',
                    timestamp: '2024-09-20T16:45:00Z',
                    operator: 'João Mendes',
                    documents: ['PO-RET-5567', 'Nota Fiscal 93456'],
                    status: 'completed'
                },
                {
                    stage: 'Consumer Verification',
                    location: 'São Paulo, Brazil',
                    timestamp: '2024-10-05T20:30:00Z',
                    operator: 'Consumer Scan',
                    documents: [],
                    status: 'current'
                }
            ]
        };

        // Mock brand dashboard data
        this.brandStats = {
            totalProducts: 145829,
            scansToday: 3842,
            verifiedToday: 3801,
            suspiciousToday: 41,
            regionsActive: 23,
            recentScans: [
                { id: 1, product: 'Highland Reserve 750ml', location: 'São Paulo, BR', time: '2 min ago', status: 'verified' },
                { id: 2, product: 'Highland Reserve 1L', location: 'Rio de Janeiro, BR', time: '5 min ago', status: 'verified' },
                { id: 3, product: 'Highland Reserve 750ml', location: 'Unknown Location', time: '8 min ago', status: 'suspicious' },
                { id: 4, product: 'Highland Reserve 750ml', location: 'Lisbon, PT', time: '12 min ago', status: 'verified' },
                { id: 5, product: 'Highland Reserve 500ml', location: 'London, UK', time: '15 min ago', status: 'verified' },
            ],
            hotspots: [
                { city: 'São Paulo', scans: 1247, suspicious: 12 },
                { city: 'Rio de Janeiro', scans: 892, suspicious: 8 },
                { city: 'London', scans: 634, suspicious: 3 },
                { city: 'New York', scans: 521, suspicious: 15 },
                { city: 'Tokyo', scans: 312, suspicious: 2 },
            ]
        };

        // Mock alerts data
        this.alerts = [
            {
                id: 1,
                severity: 'critical',
                type: 'counterfeit_detected',
                product: 'Highland Reserve 750ml',
                productId: 'NFC-ALC-2024-778234',
                location: 'Unknown Location',
                timestamp: '2024-10-06T18:23:00Z',
                description: 'Multiple scans detected from unregistered location',
                scans: 15,
                status: 'active'
            },
            {
                id: 2,
                severity: 'high',
                type: 'unusual_pattern',
                product: 'Highland Reserve 1L',
                productId: 'NFC-ALC-2024-834521',
                location: 'New York, US',
                timestamp: '2024-10-06T15:45:00Z',
                description: 'Rapid scanning pattern detected (8 scans in 2 minutes)',
                scans: 8,
                status: 'investigating'
            },
            {
                id: 3,
                severity: 'medium',
                type: 'location_mismatch',
                product: 'Highland Reserve 750ml',
                productId: 'NFC-ALC-2024-891455',
                location: 'Bangkok, TH',
                timestamp: '2024-10-06T12:10:00Z',
                description: 'Product scanned outside authorized distribution region',
                scans: 1,
                status: 'reviewing'
            },
            {
                id: 4,
                severity: 'high',
                type: 'duplicate_scan',
                product: 'Highland Reserve 500ml',
                productId: 'NFC-ALC-2024-556789',
                location: 'Multiple Locations',
                timestamp: '2024-10-06T09:30:00Z',
                description: 'Same product ID scanned in 3 different cities simultaneously',
                scans: 12,
                status: 'active'
            },
            {
                id: 5,
                severity: 'low',
                type: 'verification_failure',
                product: 'Highland Reserve 750ml',
                productId: 'NFC-ALC-2024-923841',
                location: 'Berlin, DE',
                timestamp: '2024-10-06T08:15:00Z',
                description: 'NFC tag read error - possible physical damage',
                scans: 3,
                status: 'resolved'
            }
        ];

        // Mock products inventory
        this.products = [
            {
                id: 'NFC-ALC-2024-891234',
                name: 'Highland Reserve 750ml',
                batch: 'BTH-2024-Q3-089',
                bottleNumber: '42891',
                manufactured: '2024-08-15',
                status: 'active',
                currentLocation: 'Bar do João - São Paulo',
                totalScans: 23,
                lastScan: '2024-10-05T20:30:00Z',
                verified: true
            },
            {
                id: 'NFC-ALC-2024-778234',
                name: 'Highland Reserve 750ml',
                batch: 'BTH-2024-Q3-078',
                bottleNumber: '39234',
                manufactured: '2024-08-10',
                status: 'flagged',
                currentLocation: 'Unknown',
                totalScans: 45,
                lastScan: '2024-10-06T18:23:00Z',
                verified: false
            },
            {
                id: 'NFC-ALC-2024-834521',
                name: 'Highland Reserve 1L',
                batch: 'BTH-2024-Q3-102',
                bottleNumber: '51234',
                manufactured: '2024-09-01',
                status: 'active',
                currentLocation: 'The Oak Room - New York',
                totalScans: 18,
                lastScan: '2024-10-06T15:45:00Z',
                verified: true
            },
            {
                id: 'NFC-ALC-2024-556789',
                name: 'Highland Reserve 500ml',
                batch: 'BTH-2024-Q2-067',
                bottleNumber: '28934',
                manufactured: '2024-07-22',
                status: 'flagged',
                currentLocation: 'Multiple Locations',
                totalScans: 67,
                lastScan: '2024-10-06T09:30:00Z',
                verified: false
            },
            {
                id: 'NFC-ALC-2024-923841',
                name: 'Highland Reserve 750ml',
                batch: 'BTH-2024-Q3-115',
                bottleNumber: '56712',
                manufactured: '2024-09-10',
                status: 'inactive',
                currentLocation: 'Whiskey Bar - Berlin',
                totalScans: 31,
                lastScan: '2024-10-06T08:15:00Z',
                verified: true
            },
            {
                id: 'NFC-ALC-2024-445623',
                name: 'Highland Reserve 1L',
                batch: 'BTH-2024-Q3-098',
                bottleNumber: '47856',
                manufactured: '2024-08-28',
                status: 'active',
                currentLocation: 'Premium Spirits - London',
                totalScans: 12,
                lastScan: '2024-10-05T14:20:00Z',
                verified: true
            }
        ];

        this.dashboardView = 'overview'; // Track which dashboard view is active

        this.init();
    }

    init() {
        this.checkNFCSupport();
        this.updateLanguage();
        this.render();
        this.bindEvents();
        
        // Listen for language changes
        window.addEventListener('languagechange', () => {
            this.updateLanguage();
            this.render();
        });
    }

    updateLanguage() {
        // Get current language from global variable or localStorage
        this.currentLanguage = window.currentLanguage || localStorage.getItem('fact-language') || 'en';
    }

    t(key) {
        // Get translation for current language
        const parts = key.split('.');
        let value = translations[this.currentLanguage];
        for (const part of parts) {
            value = value?.[part];
        }
        return value || key;
    }

    checkNFCSupport() {
        if ('NDEFReader' in window) {
            this.nfcSupported = true;
        }
    }

    async requestNFCPermission() {
        if ('NDEFReader' in window) {
            try {
                const ndef = new NDEFReader();
                await ndef.scan();
                this.scanning = true;
                this.render();
                
                ndef.addEventListener("reading", ({ message, serialNumber }) => {
                    console.log(`NFC tag detected: ${serialNumber}`);
                    this.scanning = false;
                    this.selectedProduct = this.mockProduct;
                    this.currentView = 'product-detail';
                    this.render();
                });

                setTimeout(() => {
                    this.scanning = false;
                    this.selectedProduct = this.mockProduct;
                    this.currentView = 'product-detail';
                    this.render();
                }, 2000);
            } catch (error) {
                console.error("NFC scan failed:", error);
                alert("NFC permission denied or error occurred");
            }
        } else {
            // Simulate scan for demo
            this.scanning = true;
            this.render();
            setTimeout(() => {
                this.scanning = false;
                this.selectedProduct = this.mockProduct;
                this.currentView = 'product-detail';
                this.render();
            }, 2000);
        }
    }

    bindEvents() {
        // Remove old event listeners by cloning and replacing the container
        const container = document.getElementById('nfc-demo-container');
        if (!container) return;
        
        // Use event delegation on the container to avoid duplicate listeners
        const handleClick = (e) => {
            const target = e.target.closest('button');
            if (!target) return;

            if (target.id === 'scan-btn') {
                this.requestNFCPermission();
            } else if (target.id === 'back-btn') {
                this.currentView = 'scan';
                this.menuOpen = false;
                this.render();
            } else if (target.id === 'dashboard-btn') {
                this.currentView = 'brand-dashboard';
                this.dashboardView = 'overview';
                this.menuOpen = false;
                this.render();
            } else if (target.id === 'menu-btn') {
                e.preventDefault();
                e.stopPropagation();
                this.menuOpen = !this.menuOpen;
                this.updateMenuState();
            } else if (target.id === 'scanner-btn') {
                this.currentView = 'scan';
                this.menuOpen = false;
                this.render();
            } else if (target.classList.contains('nav-item')) {
                // Handle dashboard navigation
                const navText = target.textContent.trim();
                if (navText.includes(this.t('demo.overview')) || navText.includes('Overview')) {
                    this.dashboardView = 'overview';
                } else if (navText.includes(this.t('demo.geographic')) || navText.includes('Geographic')) {
                    this.dashboardView = 'geographic';
                } else if (navText.includes(this.t('demo.alerts')) || navText.includes('Alerts')) {
                    this.dashboardView = 'alerts';
                } else if (navText.includes(this.t('demo.products')) || navText.includes('Products')) {
                    this.dashboardView = 'products';
                }
                this.menuOpen = false;
                this.render();
            }
        };

        const handleOverlayClick = (e) => {
            if (e.target.id === 'sidebar-overlay') {
                this.menuOpen = false;
                this.updateMenuState();
            }
        };

        // Remove old listeners if they exist
        if (this.clickHandler) {
            container.removeEventListener('click', this.clickHandler);
        }
        if (this.overlayHandler) {
            container.removeEventListener('click', this.overlayHandler);
        }

        // Store handlers for cleanup
        this.clickHandler = handleClick;
        this.overlayHandler = handleOverlayClick;

        // Add new listeners
        container.addEventListener('click', handleClick);
        container.addEventListener('click', handleOverlayClick);

        // Handle escape key
        if (this.escapeHandler) {
            document.removeEventListener('keydown', this.escapeHandler);
        }
        
        this.escapeHandler = (e) => {
            if (e.key === 'Escape' && this.menuOpen) {
                this.menuOpen = false;
                this.updateMenuState();
            }
        };
        document.addEventListener('keydown', this.escapeHandler);
    }

    updateMenuState() {
        // Update menu without full re-render to avoid flicker
        const sidebar = document.getElementById('dashboard-sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        const menuBtn = document.getElementById('menu-btn');

        if (sidebar) {
            if (this.menuOpen) {
                sidebar.classList.add('open');
                sidebar.setAttribute('aria-hidden', 'false');
            } else {
                sidebar.classList.remove('open');
                sidebar.setAttribute('aria-hidden', 'true');
            }
        }

        if (overlay) {
            if (this.menuOpen) {
                overlay.classList.add('visible');
            } else {
                overlay.classList.remove('visible');
            }
        }

        if (menuBtn) {
            menuBtn.setAttribute('aria-expanded', this.menuOpen);
            menuBtn.innerHTML = this.menuOpen ? 
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' :
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
        }

        // Prevent body scroll on mobile when menu is open
        if (this.menuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }

    render() {
        const container = document.getElementById('nfc-demo-container');
        if (!container) return;

        switch (this.currentView) {
            case 'scan':
                container.innerHTML = this.renderScanView();
                break;
            case 'product-detail':
                container.innerHTML = this.renderProductDetailView();
                break;
            case 'brand-dashboard':
                container.innerHTML = this.renderBrandDashboard();
                break;
        }

        this.bindEvents();
    }

    renderScanView() {
        return `
            <div class="demo-scan-view">
                <div class="simulation-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    ${this.t('demo.simulationBadge')}
                </div>

                <div class="demo-header">
                    <div class="demo-icon">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                            <line x1="8" y1="21" x2="16" y2="21"/>
                            <line x1="12" y1="17" x2="12" y2="21"/>
                        </svg>
                    </div>
                    <h2>${this.t('demo.factVerify')}</h2>
                    <p>${this.t('demo.consumerSubtitle')}</p>
                </div>

                <div class="demo-card">
                    ${this.nfcSupported ? `
                        <div class="nfc-status">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22,4 12,14.01 9,11.01"/>
                            </svg>
                            <span>${this.t('demo.nfcEnabled')}</span>
                        </div>
                    ` : ''}

                    <button id="scan-btn" class="scan-button" ${this.scanning ? 'disabled' : ''}>
                        ${this.scanning ? `
                            <div class="spinner"></div>
                            ${this.t('demo.scanningButton')}
                        ` : `
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                            ${this.t('demo.scanButton')}
                        `}
                    </button>
                    
                    <p class="simulation-note">${this.t('demo.simulationNote')}</p>

                    <div class="demo-footer">
                        <button id="dashboard-btn" class="dashboard-link">
                            ${this.t('demo.brandDashboardLink')}
                        </button>
                    </div>
                </div>

                <div class="demo-features">
                    <div class="feature">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                        <p>${this.t('demo.features.blockchain')}</p>
                    </div>
                    <div class="feature">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        <p>${this.t('demo.features.instant')}</p>
                    </div>
                    <div class="feature">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <p>${this.t('demo.features.traceability')}</p>
                    </div>
                </div>
            </div>
        `;
    }

    renderProductDetailView() {
        return `
            <div class="demo-product-view">
                <div class="demo-header">
                    <button id="back-btn" class="back-button">${this.t('demo.backButton')}</button>
                    <h2>${this.t('demo.productJourney')}</h2>
                    <div class="spacer"></div>
                </div>

                <div class="verification-status">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                    <h3>${this.t('demo.verifiedTitle')}</h3>
                    <p>${this.t('demo.verifiedSubtitle')}</p>
                </div>

                <div class="product-info">
                    <h3>${this.mockProduct.name}</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <p class="label">${this.t('demo.brand')}</p>
                            <p class="value">${this.mockProduct.brand}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">${this.t('demo.bottleNumber')}</p>
                            <p class="value">${this.mockProduct.bottleNumber}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">${this.t('demo.batch')}</p>
                            <p class="value">${this.mockProduct.batchNumber}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">${this.t('demo.manufactured')}</p>
                            <p class="value">${new Date(this.mockProduct.manufactured).toLocaleDateString(this.currentLanguage === 'pt' ? 'pt-BR' : 'en-US')}</p>
                        </div>
                    </div>
                </div>

                <div class="journey-timeline">
                    <h3>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                            <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                            <line x1="12" y1="22.08" x2="12" y2="12"/>
                        </svg>
                        ${this.t('demo.supplyChainJourney')}
                    </h3>

                    <div class="timeline">
                        ${this.mockProduct.journey.map((step, index) => `
                            <div class="timeline-item">
                                <div class="timeline-marker ${step.status === 'current' ? 'current' : 'completed'}">
                                    ${step.status === 'current' ? 
                                        '<div class="pulse-dot"></div>' : 
                                        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>'
                                    }
                                </div>
                                <div class="timeline-content">
                                    <div class="timeline-card">
                                        <div class="timeline-header">
                                            <h4>${step.stage}</h4>
                                            <span class="timestamp">${new Date(step.timestamp).toLocaleString()}</span>
                                        </div>
                                        <div class="location">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                                <circle cx="12" cy="10" r="3"/>
                                            </svg>
                                            ${step.location}
                                        </div>
                                        ${step.operator ? `<p class="operator">${this.t('demo.operator')} ${step.operator}</p>` : ''}
                                        ${step.documents.length > 0 ? `
                                            <div class="documents">
                                                <p class="doc-label">${this.t('demo.documents')}</p>
                                                <div class="doc-list">
                                                    ${step.documents.map(doc => `
                                                        <span class="doc-tag">
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                                                <polyline points="14,2 14,8 20,8"/>
                                                            </svg>
                                                            ${doc}
                                                        </span>
                                                    `).join('')}
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="product-id">
                    <p class="id-label">${this.t('demo.productId')}</p>
                    <p class="id-value">${this.mockProduct.id}</p>
                </div>
            </div>
        `;
    }

    renderBrandDashboard() {
        return `
            <div class="demo-dashboard">
                <div class="dashboard-header">
                    <h2>${this.t('demo.brandDashboard')}</h2>
                    <button id="menu-btn" class="menu-button" aria-label="Toggle menu" aria-controls="dashboard-sidebar" aria-expanded="${this.menuOpen}">
                        ${this.menuOpen ? 
                            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' :
                            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>'
                        }
                    </button>
                </div>

                <div class="dashboard-content">
                    <div id="dashboard-sidebar" class="sidebar ${this.menuOpen ? 'open' : ''}" role="complementary" aria-hidden="${!this.menuOpen}">
                        <div class="sidebar-header">
                            <h3>FACT Dashboard</h3>
                            <p>Highland Reserve</p>
                        </div>
                        <nav class="sidebar-nav">
                            <button class="nav-item ${this.dashboardView === 'overview' ? 'active' : ''}">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                                </svg>
                                ${this.t('demo.overview')}
                            </button>
                            <button class="nav-item ${this.dashboardView === 'geographic' ? 'active' : ''}">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                ${this.t('demo.geographic')}
                            </button>
                            <button class="nav-item ${this.dashboardView === 'alerts' ? 'active' : ''}">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                                    <line x1="12" y1="9" x2="12" y2="13"/>
                                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                                </svg>
                                ${this.t('demo.alerts')}
                            </button>
                            <button class="nav-item ${this.dashboardView === 'products' ? 'active' : ''}">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                                </svg>
                                ${this.t('demo.products')}
                            </button>
                            <button id="scanner-btn" class="nav-item mobile-only">
                                ${this.t('demo.backToScanner')}
                            </button>
                        </nav>
                    </div>

                    <div id="sidebar-overlay" class="sidebar-overlay ${this.menuOpen ? 'visible' : ''}"></div>

                    <div class="main-content">
                        ${this.dashboardView === 'overview' ? this.renderOverviewDashboard() : ''}
                        ${this.dashboardView === 'alerts' ? this.renderAlertsDashboard() : ''}
                        ${this.dashboardView === 'products' ? this.renderProductsDashboard() : ''}
                        ${this.dashboardView === 'geographic' ? this.renderGeographicDashboard() : ''}
                    </div>
                </div>
            </div>
        `;
    }

    renderOverviewDashboard() {
        return `
                        <div class="stats-grid">
                            <div class="stat-card">
                                <div class="stat-header">
                                    <p>${this.t('demo.totalProducts')}</p>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                        <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                                    </svg>
                                </div>
                                <p class="stat-value">${this.brandStats.totalProducts.toLocaleString(this.currentLanguage === 'pt' ? 'pt-BR' : 'en-US')}</p>
                            </div>

                            <div class="stat-card">
                                <div class="stat-header">
                                    <p>${this.t('demo.scansToday')}</p>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="11" cy="11" r="8"/>
                                        <path d="M21 21l-4.35-4.35"/>
                                    </svg>
                                </div>
                                <p class="stat-value">${this.brandStats.scansToday.toLocaleString(this.currentLanguage === 'pt' ? 'pt-BR' : 'en-US')}</p>
                            </div>

                            <div class="stat-card">
                                <div class="stat-header">
                                    <p>${this.t('demo.verifiedToday')}</p>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                        <polyline points="22,4 12,14.01 9,11.01"/>
                                    </svg>
                                </div>
                                <p class="stat-value">${this.brandStats.verifiedToday.toLocaleString(this.currentLanguage === 'pt' ? 'pt-BR' : 'en-US')}</p>
                            </div>

                            <div class="stat-card">
                                <div class="stat-header">
                                    <p>${this.t('demo.suspicious')}</p>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                                        <line x1="12" y1="9" x2="12" y2="13"/>
                                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                                    </svg>
                                </div>
                                <p class="stat-value">${this.brandStats.suspiciousToday.toLocaleString(this.currentLanguage === 'pt' ? 'pt-BR' : 'en-US')}</p>
                            </div>
                        </div>

                        <div class="dashboard-grid">
                            <div class="dashboard-card">
                                <div class="card-header">
                                    <h3>${this.t('demo.realTimeScans')}</h3>
                                </div>
                                <div class="card-content">
                                    ${this.brandStats.recentScans.map(scan => `
                                        <div class="scan-item">
                                            <div class="scan-info">
                                                <p class="scan-product">${scan.product}</p>
                                                <div class="scan-location">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                                        <circle cx="12" cy="10" r="3"/>
                                                    </svg>
                                                    ${scan.location}
                                                </div>
                                            </div>
                                            <div class="scan-status">
                                                <p class="scan-time">${scan.time}</p>
                                                <span class="status-badge ${scan.status}">${this.t('demo.' + scan.status)}</span>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <div class="dashboard-card">
                                <div class="card-header">
                                    <h3>${this.t('demo.topLocations')}</h3>
                                </div>
                                <div class="card-content">
                                    ${this.brandStats.hotspots.map((spot, index) => `
                                        <div class="hotspot-item">
                                            <div class="hotspot-header">
                                                <p class="hotspot-city">${spot.city}</p>
                                                <p class="hotspot-scans">${spot.scans.toLocaleString(this.currentLanguage === 'pt' ? 'pt-BR' : 'en-US')} ${this.t('demo.scans')}</p>
                                            </div>
                                            <div class="hotspot-bar">
                                                <div class="hotspot-fill" style="width: ${(spot.scans / Math.max(...this.brandStats.hotspots.map(s => s.scans))) * 100}%"></div>
                                            </div>
                                            ${spot.suspicious > 0 ? `
                                                <p class="hotspot-suspicious">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                                                        <line x1="12" y1="9" x2="12" y2="13"/>
                                                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                                                    </svg>
                                                    ${spot.suspicious.toLocaleString(this.currentLanguage === 'pt' ? 'pt-BR' : 'en-US')} ${this.t('demo.suspiciousScans')}
                                                </p>
                                            ` : ''}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
        `;
    }

    renderAlertsDashboard() {
        const severityColor = {
            critical: '#ff0000',
            high: '#ff6600',
            medium: '#ffaa00',
            low: '#ffee00'
        };

        const severityIcon = {
            critical: '!!!',
            high: '!!',
            medium: '!',
            low: 'i'
        };

        return `
            <div class="alerts-view">
                <div class="alerts-header">
                    <h2>${this.t('demo.alertsManagement')}</h2>
                    <div class="alert-filters">
                        <span class="filter-badge filter-all active">${this.t('demo.all')} (${this.alerts.length})</span>
                        <span class="filter-badge filter-critical">${this.t('demo.critical')} (${this.alerts.filter(a => a.severity === 'critical').length})</span>
                        <span class="filter-badge filter-active">${this.t('demo.active')} (${this.alerts.filter(a => a.status === 'active').length})</span>
                    </div>
                </div>

                <div class="alerts-list">
                    ${this.alerts.map(alert => `
                        <div class="alert-card severity-${alert.severity} status-${alert.status}">
                            <div class="alert-header">
                                <div class="alert-severity" style="background-color: ${severityColor[alert.severity]}">
                                    ${severityIcon[alert.severity]}
                                </div>
                                <div class="alert-title">
                                    <h3>${this.t('demo.alertTypes.' + alert.type)}</h3>
                                    <p class="alert-meta">${alert.productId} • ${new Date(alert.timestamp).toLocaleString(this.currentLanguage === 'pt' ? 'pt-BR' : 'en-US')}</p>
                                </div>
                                <span class="alert-status-badge status-${alert.status}">${this.t('demo.alertStatus.' + alert.status)}</span>
                            </div>
                            <div class="alert-body">
                                <div class="alert-product-info">
                                    <p class="product-name">${alert.product}</p>
                                    <p class="alert-location">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                            <circle cx="12" cy="10" r="3"/>
                                        </svg>
                                        ${alert.location}
                                    </p>
                                </div>
                                <p class="alert-description">${alert.description}</p>
                                <div class="alert-stats">
                                    <span class="alert-stat">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <circle cx="11" cy="11" r="8"/>
                                            <path d="M21 21l-4.35-4.35"/>
                                        </svg>
                                        ${alert.scans} ${this.t('demo.scans')}
                                    </span>
                                    <span class="alert-stat">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <circle cx="12" cy="12" r="10"/>
                                            <polyline points="12,6 12,12 16,14"/>
                                        </svg>
                                        ${this.getTimeAgo(alert.timestamp)}
                                    </span>
                                </div>
                            </div>
                            <div class="alert-actions">
                                <button class="alert-action-btn">${this.t('demo.investigate')}</button>
                                <button class="alert-action-btn">${this.t('demo.resolve')}</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderProductsDashboard() {
        const statusColor = {
            active: '#00ff88',
            flagged: '#ff4444',
            inactive: '#888888'
        };

        return `
            <div class="products-view">
                <div class="products-header">
                    <h2>${this.t('demo.productInventory')}</h2>
                    <div class="product-filters">
                        <span class="filter-badge filter-all active">${this.t('demo.all')} (${this.products.length})</span>
                        <span class="filter-badge filter-active">${this.t('demo.active')} (${this.products.filter(p => p.status === 'active').length})</span>
                        <span class="filter-badge filter-flagged">${this.t('demo.flagged')} (${this.products.filter(p => p.status === 'flagged').length})</span>
                    </div>
                </div>

                <div class="products-table">
                    <div class="table-header">
                        <div class="th">${this.t('demo.productId')}</div>
                        <div class="th">${this.t('demo.productName')}</div>
                        <div class="th">${this.t('demo.batch')}</div>
                        <div class="th">${this.t('demo.currentLocation')}</div>
                        <div class="th">${this.t('demo.totalScans')}</div>
                        <div class="th">${this.t('demo.lastScan')}</div>
                        <div class="th">${this.t('demo.status')}</div>
                    </div>
                    ${this.products.map(product => `
                        <div class="table-row status-${product.status}">
                            <div class="td">
                                <span class="product-id-cell">${product.id}</span>
                            </div>
                            <div class="td">
                                <strong>${product.name}</strong>
                                <span class="bottle-number">#${product.bottleNumber}</span>
                            </div>
                            <div class="td">${product.batch}</div>
                            <div class="td">
                                <span class="location-cell">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                    ${product.currentLocation}
                                </span>
                            </div>
                            <div class="td">
                                <span class="scan-count">${product.totalScans.toLocaleString(this.currentLanguage === 'pt' ? 'pt-BR' : 'en-US')}</span>
                            </div>
                            <div class="td">
                                <span class="last-scan">${this.getTimeAgo(product.lastScan)}</span>
                            </div>
                            <div class="td">
                                <span class="status-badge status-${product.status}" style="background-color: ${statusColor[product.status]}20; color: ${statusColor[product.status]}; border: 1px solid ${statusColor[product.status]}">
                                    ${this.t('demo.productStatus.' + product.status)}
                                </span>
                                ${!product.verified ? '<svg class="warning-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff4444" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderGeographicDashboard() {
        return `
            <div class="geographic-view">
                <div class="geographic-header">
                    <h2>${this.t('demo.geographicDistribution')}</h2>
                </div>
                <div class="geographic-content">
                    <div class="map-placeholder">
                        <svg width="100%" height="400" viewBox="0 0 800 400">
                            <rect width="800" height="400" fill="#1a1a1a" stroke="#333" stroke-width="1"/>
                            <text x="400" y="200" text-anchor="middle" fill="#666" font-size="18">
                                ${this.t('demo.interactiveMap')}
                            </text>
                        </svg>
                    </div>
                    <div class="location-stats-grid">
                        ${this.brandStats.hotspots.map(spot => `
                            <div class="location-stat-card">
                                <h3>${spot.city}</h3>
                                <div class="location-stat-value">${spot.scans.toLocaleString(this.currentLanguage === 'pt' ? 'pt-BR' : 'en-US')}</div>
                                <p class="location-stat-label">${this.t('demo.totalScans')}</p>
                                ${spot.suspicious > 0 ? `
                                    <div class="location-alert">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff4444" stroke-width="2">
                                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                                            <line x1="12" y1="9" x2="12" y2="13"/>
                                            <line x1="12" y1="17" x2="12.01" y2="17"/>
                                        </svg>
                                        ${spot.suspicious} ${this.t('demo.suspiciousScans')}
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    getTimeAgo(timestamp) {
        const now = new Date();
        const past = new Date(timestamp);
        const diffMs = now - past;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 60) {
            return `${diffMins} ${this.t('demo.minutesAgo')}`;
        } else if (diffHours < 24) {
            return `${diffHours} ${this.t('demo.hoursAgo')}`;
        } else {
            return `${diffDays} ${this.t('demo.daysAgo')}`;
        }
    }
}

// Initialize demo when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if demo container exists
    if (document.getElementById('nfc-demo-container')) {
        window.nfcDemo = new NFCDemo();
    }
});
