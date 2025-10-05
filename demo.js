// FACT NFC Demo - Interactive Product Verification Demo
class NFCDemo {
    constructor() {
        this.currentView = 'scan';
        this.nfcSupported = false;
        this.scanning = false;
        this.selectedProduct = null;
        this.menuOpen = false;
        
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

        this.init();
    }

    init() {
        this.checkNFCSupport();
        this.render();
        this.bindEvents();
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
        // Bind events after DOM is rendered
        setTimeout(() => {
            const scanBtn = document.getElementById('scan-btn');
            if (scanBtn) {
                scanBtn.addEventListener('click', () => this.requestNFCPermission());
            }

            const backBtn = document.getElementById('back-btn');
            if (backBtn) {
                backBtn.addEventListener('click', () => {
                    this.currentView = 'scan';
                    this.render();
                });
            }

            const dashboardBtn = document.getElementById('dashboard-btn');
            if (dashboardBtn) {
                dashboardBtn.addEventListener('click', () => {
                    this.currentView = 'brand-dashboard';
                    this.render();
                });
            }

            const menuBtn = document.getElementById('menu-btn');
            if (menuBtn) {
                menuBtn.addEventListener('click', () => {
                    this.menuOpen = !this.menuOpen;
                    this.render();
                });
            }

            const scannerBtn = document.getElementById('scanner-btn');
            if (scannerBtn) {
                scannerBtn.addEventListener('click', () => {
                    this.currentView = 'scan';
                    this.render();
                });
            }
        }, 100);
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
                <div class="demo-header">
                    <div class="demo-icon">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                            <line x1="8" y1="21" x2="16" y2="21"/>
                            <line x1="12" y1="17" x2="12" y2="21"/>
                        </svg>
                    </div>
                    <h2>FACT Verify</h2>
                    <p>Tap your phone to verify product authenticity</p>
                </div>

                <div class="demo-card">
                    ${this.nfcSupported ? `
                        <div class="nfc-status">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22,4 12,14.01 9,11.01"/>
                            </svg>
                            <span>NFC Enabled</span>
                        </div>
                    ` : ''}

                    <button id="scan-btn" class="scan-button" ${this.scanning ? 'disabled' : ''}>
                        ${this.scanning ? `
                            <div class="spinner"></div>
                            Scanning...
                        ` : `
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                            Scan Product
                        `}
                    </button>

                    <div class="demo-footer">
                        <button id="dashboard-btn" class="dashboard-link">
                            Brand Owner? Access Dashboard →
                        </button>
                    </div>
                </div>

                <div class="demo-features">
                    <div class="feature">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                        <p>Blockchain Verified</p>
                    </div>
                    <div class="feature">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        <p>Instant Results</p>
                    </div>
                    <div class="feature">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <p>Full Traceability</p>
                    </div>
                </div>
            </div>
        `;
    }

    renderProductDetailView() {
        return `
            <div class="demo-product-view">
                <div class="demo-header">
                    <button id="back-btn" class="back-button">← Back</button>
                    <h2>Product Journey</h2>
                    <div class="spacer"></div>
                </div>

                <div class="verification-status">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                    <h3>✓ Verified Authentic</h3>
                    <p>This product has been verified on the blockchain</p>
                </div>

                <div class="product-info">
                    <h3>${this.mockProduct.name}</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <p class="label">Brand</p>
                            <p class="value">${this.mockProduct.brand}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">Bottle #</p>
                            <p class="value">${this.mockProduct.bottleNumber}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">Batch</p>
                            <p class="value">${this.mockProduct.batchNumber}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">Manufactured</p>
                            <p class="value">${new Date(this.mockProduct.manufactured).toLocaleDateString()}</p>
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
                        Supply Chain Journey
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
                                        ${step.operator ? `<p class="operator">Operator: ${step.operator}</p>` : ''}
                                        ${step.documents.length > 0 ? `
                                            <div class="documents">
                                                <p class="doc-label">Documents:</p>
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
                    <p class="id-label">Product ID</p>
                    <p class="id-value">${this.mockProduct.id}</p>
                </div>
            </div>
        `;
    }

    renderBrandDashboard() {
        return `
            <div class="demo-dashboard">
                <div class="dashboard-header">
                    <h2>Brand Dashboard</h2>
                    <button id="menu-btn" class="menu-button">
                        ${this.menuOpen ? 
                            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' :
                            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>'
                        }
                    </button>
                </div>

                <div class="dashboard-content">
                    <div class="sidebar ${this.menuOpen ? 'open' : ''}">
                        <div class="sidebar-header">
                            <h3>FACT Dashboard</h3>
                            <p>Highland Reserve</p>
                        </div>
                        <nav class="sidebar-nav">
                            <button class="nav-item active">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                                </svg>
                                Overview
                            </button>
                            <button class="nav-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                Geographic
                            </button>
                            <button class="nav-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                                    <line x1="12" y1="9" x2="12" y2="13"/>
                                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                                </svg>
                                Alerts
                            </button>
                            <button class="nav-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                                </svg>
                                Products
                            </button>
                            <button id="scanner-btn" class="nav-item mobile-only">
                                Back to Scanner
                            </button>
                        </nav>
                    </div>

                    <div class="main-content">
                        <div class="stats-grid">
                            <div class="stat-card">
                                <div class="stat-header">
                                    <p>Total Products</p>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                        <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                                    </svg>
                                </div>
                                <p class="stat-value">${this.brandStats.totalProducts.toLocaleString()}</p>
                            </div>

                            <div class="stat-card">
                                <div class="stat-header">
                                    <p>Scans Today</p>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="11" cy="11" r="8"/>
                                        <path d="M21 21l-4.35-4.35"/>
                                    </svg>
                                </div>
                                <p class="stat-value">${this.brandStats.scansToday.toLocaleString()}</p>
                            </div>

                            <div class="stat-card">
                                <div class="stat-header">
                                    <p>Verified Today</p>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                        <polyline points="22,4 12,14.01 9,11.01"/>
                                    </svg>
                                </div>
                                <p class="stat-value">${this.brandStats.verifiedToday.toLocaleString()}</p>
                            </div>

                            <div class="stat-card">
                                <div class="stat-header">
                                    <p>Suspicious</p>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                                        <line x1="12" y1="9" x2="12" y2="13"/>
                                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                                    </svg>
                                </div>
                                <p class="stat-value">${this.brandStats.suspiciousToday}</p>
                            </div>
                        </div>

                        <div class="dashboard-grid">
                            <div class="dashboard-card">
                                <div class="card-header">
                                    <h3>Real-Time Scans</h3>
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
                                                <span class="status-badge ${scan.status}">${scan.status}</span>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <div class="dashboard-card">
                                <div class="card-header">
                                    <h3>Top Scan Locations</h3>
                                </div>
                                <div class="card-content">
                                    ${this.brandStats.hotspots.map((spot, index) => `
                                        <div class="hotspot-item">
                                            <div class="hotspot-header">
                                                <p class="hotspot-city">${spot.city}</p>
                                                <p class="hotspot-scans">${spot.scans} scans</p>
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
                                                    ${spot.suspicious} suspicious scans
                                                </p>
                                            ` : ''}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize demo when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if demo container exists
    if (document.getElementById('nfc-demo-container')) {
        window.nfcDemo = new NFCDemo();
    }
});
