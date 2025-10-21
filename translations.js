const translations = {
    en: {
        meta: {
            title: "FACT - Foundation Against Counterfeit Trade",
            copyright: "© 2024 Foundation Against Counterfeit Trade. Building a safer, more accountable global alcohol market."
        },
        nav: {
            platform: "Platform",
            demo: "Try Demo",
            faq: "FAQ",
            contact: "Contact",
            brandLogin: "Brand LOGIN",
            scanNow: "SCAN NOW"
        },
        hero: {
            title: "Verify Authenticity with a Simple Tap",
            subtitle: "Combat counterfeit alcohol with blockchain-verified NFC technology. Protect consumers, brands, and governments with instant authentication.",
            learnMore: "Learn More",
            getStarted: "Get Started",
            scanNow: "SCAN NOW",
            verified: "✓ Verified Authentic"
        },
        mission: {
            title: "Our Mission",
            description: "Our mission is to protect the world's leading brands from counterfeiting — and to shield consumers from deception, harm, or even death caused by fake products.",
            banner: "To defend great brands and save lives by ending counterfeit alcohol at its source."
        },
        features: {
            title: "Key Features",
            tamperEvident: {
                title: "Tamper-Evident",
                description: "Physical and digital security ensures any tampering attempt is immediately detected and recorded."
            },
            blockchain: {
                title: "Blockchain Verified",
                description: "Every scan is authenticated through immutable blockchain technology, ensuring complete transparency."
            },
            noApp: {
                title: "No App Required",
                description: "Works with any NFC-enabled smartphone. Just tap and verify - no downloads necessary."
            },
            globalTracking: {
                title: "Global Tracking",
                description: "Real-time monitoring detects suspicious patterns and fraud attempts across the supply chain."
            },
            analytics: {
                title: "Analytics Dashboard",
                description: "Comprehensive data insights for brands and authorities to track distribution and compliance."
            },
            durability: {
                title: "Extended Durability",
                description: "Passive NFC chips require no battery and last over 10 years, ensuring long-term protection."
            }
        },
        howItWorks: {
            title: "How It Works",
            step1: { title: "Tag Integration", description: "NFC tags embedded at bottling facility with unique encrypted keys" },
            step2: { title: "Consumer Scan", description: "Simple smartphone tap opens secure verification webpage" },
            step3: { title: "Instant Verification", description: "Real-time authentication confirms product genuineness" },
            step4: { title: "Data Logging", description: "All scans monitored for fraud patterns and alerts" }
        },
        benefits: {
            title: "Benefits for All Stakeholders",
            consumers: { title: "For Consumers", description: "Peace of mind knowing you're consuming safe, authentic products. Instant verification at your fingertips." },
            brands: { title: "For Brands", description: "Protect brand reputation, reduce counterfeiting losses, and gain valuable supply chain insights." },
            governments: { title: "For Governments", description: "Combat illicit trade, improve tax compliance, and enhance public health protection." },
            retailers: { title: "For Retailers", description: "Verify inventory integrity instantly and build customer trust with authenticated products." }
        },
        faq: {
            metaTitle: "FACT - FAQ",
            title: "FACT - FAQ",
            backLink: "← Back to Home",
            questions: {
                q1: {
                    question: "Why is this better than traditional solutions?",
                    answer: "Traditional solutions like holograms and printed QR codes can be easily copied. NFC tags are unique and encrypted — impossible to clone. The system records every interaction (manufacturing, distribution, seal breaking) creating a complete history that automatically identifies suspicious patterns through AI. To verify authenticity: Android users access www.facttag.info, and iPhone users download our lightweight, intuitive app."
                },
                q2: {
                    question: "How does scanning work? Manual, bottle by bottle?",
                    answer: "Not necessarily manual. Boxes have RFID tags that can be read from distances up to 10 meters through portals installed at strategic points in the supply chain (factory exit, distributor entrance, retail locations). For sealed cases with 6 or 12 bottles, simply passing through the portal registers all units simultaneously via RFID. Manual readings via smartphone are also possible when needed, particularly by end consumers or establishments."
                },
                q3: {
                    question: "What if someone reuses the cap on other counterfeit bottles?",
                    answerIntro: "The platform's AI generates alerts based on consumption patterns: volume, customer profile, shelf time, seal-breaking moment (if they have the proper tag), and product type. For example:",
                    barExample: "Bar/Club: The system knows the establishment receives 20 premium whisky bottles weekly. If a cap from a batch delivered 3 weeks ago appears on a \"new\" bottle, an alert triggers. If that bottle is consumed in 2 days (when the normal pattern is 5-7 days), the suspicion is confirmed.",
                    supermarketExample: "Supermarket: A chain receives 500 vodka units monthly. If caps from old batches start circulating in abnormal volumes, or if the time between delivery and \"sale\" is inconsistent with historical data, the system identifies it immediately.",
                    distributorExample: "Distributor: If the same cap circulates between multiple points of sale sequentially, or appears in locations unauthorized by the official distribution chain, algorithms detect the deviation.",
                    analysisSummary: "The system's AI cross-references geographic location, time between transactions, establishment consumption profile, and batch history to uncover irregularities that would be humanly invisible."
                },
                q4: {
                    question: "How does it prevent liquid tampering after opening the bottle?",
                    answerPrimary: "The system detects the exact moment the seal is broken and monitors consumption patterns. If a bottle is opened, resealed by a fraudster, and returns to circulation irregularly, AI algorithms recognize the deviations and notify the manufacturer or health authorities immediately.",
                    answerSecondary: "While it doesn't eliminate 100% of the risk of tampering at final consumption (at home), it drastically prevents large-scale adulteration in the distribution chain — where the problem actually occurs and causes significant damage."
                },
                q5: {
                    question: "Can consumers verify authenticity?",
                    answer: "Yes! Android users access www.facttag.info and iPhone users download our lightweight app. Simply bring your smartphone close to the cap (NFC). The system instantly shows: product authenticity, manufacturing date, batch, movement history, and additional product information."
                },
                q6: {
                    question: "What's the real impact of counterfeiting?",
                    answerIntro: "The counterfeit beverage industry moves an estimated R$55 billion annually in Brazil alone, causing:",
                    losses: "Massive losses to legitimate manufacturers",
                    tax: "Tax revenue losses",
                    health: "Serious public health risks: counterfeit products often contain methanol and other toxic substances causing poisoning, blindness, and even death",
                    brand: "Irreparable damage to established brand reputations",
                    answerSummary: "The system implementation cost is insignificant compared to the damage caused by counterfeiting."
                },
                q7: {
                    question: "How much does implementation cost?",
                    answer: "NFC tag costs vary by volume but generally range from R$0.50 to R$2.00 per unit at scale. RFID tags for boxes cost between R$0.30 to R$5.00. Considering the estimated R$55 billion loss to counterfeit products, public health risks, and brand damage, ROI is typically positive within 6-12 months for most manufacturers."
                },
                q8: {
                    question: "Is it 100% foolproof?",
                    answer: "No system is, not even airport security. But it's significantly more robust than any solution available today. The combination of unique hardware (NFC/RFID tags), encryption, real-time tracking, and AI analysis creates multiple layers of protection that make counterfeiting extremely difficult and economically unviable for fraudsters."
                },
                q9: {
                    question: "Does it work offline?",
                    answer: "Yes! Basic authenticity verification works offline — you can scan and confirm there's a legitimate tag properly positioned. However, to access the complete movement history and verify the latest supply chain information, an internet connection is required. Once online, all data synchronizes automatically."
                }
            }
        },
        footer: {
            title: "Join the Fight Against Counterfeit Trade",
            subtitle: "Partner with FACT to establish a new industry standard where authenticity verification is just a tap away.",
            contactUs: "Contact Us Today",
            patentPrefix: "Powered by the latest cryptographic technology. Patent:",
            patentLinkLabel: "US20210391993A1",
            copyright: "© 2024 Foundation Against Counterfeit Trade. Building a safer, more accountable global alcohol market."
        },
        demo: {
            pageTitle: "Interactive Demo",
            pageSubtitle: "Experience FACT's NFC verification system in action. This is a simulated demo showing how consumers verify product authenticity and how brands monitor their supply chain in real-time.",
            consumerTab: "Consumer Scan",
            brandTab: "Brand Dashboard",
            simulationBadge: "SIMULATED DEMO - Click to see how it works",
            factVerify: "FACT Verify",
            consumerSubtitle: "Experience how consumers verify product authenticity",
            nfcEnabled: "NFC Enabled",
            scanButton: "Try Simulated Scan",
            scanningButton: "Simulating Scan...",
            simulationNote: "This is a demo simulation of the consumer experience",
            brandDashboardLink: "Brand Owner? Access Dashboard →",
            backButton: "← Back",
            verifiedTitle: "✓ Verified Authentic",
            verifiedSubtitle: "This product has been verified on the blockchain",
            productJourney: "Product Journey",
            brand: "Brand",
            bottleNumber: "Bottle #",
            batch: "Batch",
            manufactured: "Manufactured",
            supplyChainJourney: "Supply Chain Journey",
            productId: "Product ID",
            brandDashboard: "Brand Dashboard",
            overview: "Overview",
            geographic: "Geographic",
            alerts: "Alerts",
            products: "Products",
            backToScanner: "Back to Scanner",
            totalProducts: "Total Products",
            scansToday: "Scans Today",
            verifiedToday: "Verified Today",
            suspicious: "Suspicious",
            realTimeScans: "Real-Time Scans",
            topLocations: "Top Scan Locations",
            scans: "scans",
            suspiciousScans: "suspicious scans",
            verified: "verified",
            features: {
                blockchain: "Blockchain Verified",
                instant: "Instant Results",
                traceability: "Full Traceability"
            },
            stages: {
                manufacturing: "Manufacturing",
                warehouse: "Warehouse",
                shipping: "International Shipping",
                distributor: "Distributor",
                retail: "Retail/Point of Sale",
                consumer: "Consumer Verification"
            },
            operator: "Operator:",
            documents: "Documents:",
            alertsManagement: "Alerts Management",
            all: "All",
            critical: "Critical",
            active: "Active",
            alertTypes: {
                counterfeit_detected: "Counterfeit Detected",
                unusual_pattern: "Unusual Scanning Pattern",
                location_mismatch: "Location Mismatch",
                duplicate_scan: "Duplicate Scan Detected",
                verification_failure: "Verification Failure"
            },
            alertStatus: {
                active: "Active",
                investigating: "Investigating",
                reviewing: "Reviewing",
                resolved: "Resolved"
            },
            investigate: "Investigate",
            resolve: "Resolve",
            productInventory: "Product Inventory",
            flagged: "Flagged",
            productName: "Product Name",
            currentLocation: "Current Location",
            lastScan: "Last Scan",
            productStatus: {
                active: "Active",
                flagged: "Flagged",
                inactive: "Inactive"
            },
            geographicDistribution: "Geographic Distribution",
            interactiveMap: "Interactive Map (Demo)",
            minutesAgo: "min ago",
            hoursAgo: "hr ago",
            daysAgo: "days ago"
        },
        aboutPage: {
            metaTitle: "About Us - FACT",
            title: "About Us",
            intro: "FACT (Foundation Against Counterfeit Trade) is a coalition of technologists, policy experts, investigators, and brand partners committed to stopping counterfeit goods from reaching consumers. We combine modern supply-chain intelligence with cooperative enforcement to build trust in the global marketplace.",
            missionTitle: "Our Mission",
            missionBody: "We exist to make authenticity the default expectation wherever people shop. By connecting brands, marketplaces, and regulators with real-time insights, FACT helps legitimate products move freely while shutting down the networks that enable counterfeiting.",
            howTitle: "How We Work",
            howIntro: "We take a multi-layered approach to protecting consumers and safeguarding brands:",
            howItems: {
                intelligenceTitle: "Intelligence:",
                intelligenceBody: "We monitor supply-chain signals and online listings to identify suspicious activity before it spreads.",
                collaborationTitle: "Collaboration:",
                collaborationBody: "We connect manufacturers, retailers, and law enforcement partners to coordinate swift action.",
                educationTitle: "Education:",
                educationBody: "We equip consumers and frontline teams with the tools to recognize and report counterfeit goods."
            },
            impactTitle: "Impact",
            impactBody: "Our team has helped brands protect their IP portfolios, recover lost revenue, and restore confidence among their customers. Every investigation strengthens our shared intelligence network, creating a ripple effect that keeps counterfeit products off shelves and out of homes.",
            teamTitle: "Who We Are",
            teamBody: "FACT brings together specialists in data science, legal policy, logistics, and consumer advocacy. We actively partner with NGOs, trade associations, and public agencies to ensure communities around the world benefit from safer commerce.",
            joinTitle: "Join the Effort",
            joinBody1: "Counterfeit trade adapts quickly, so our defenses must evolve even faster.",
            joinBody2: "If you are a brand owner, marketplace operator, or consumer advocate interested in collaborating with FACT, please reach out through our ",
            contactLinkLabel: "contact page",
            joinBody3: " to start the conversation.",
            backLink: "← Back to Home"
        },
        pressRelease: {
            forImmediateRelease: "FOR IMMEDIATE RELEASE",
            date: "Date:",
            contact: "Contact:",
            website: "Website:",
            title: "Brazil's Methanol Crisis: A Preventable Tragedy Demanding Immediate Action",
            subtitle: "FACT's Patented Authentication Technology, Successfully Protecting Consumers Since 2019, Offers Immediate Solution to Combat Counterfeit Alcohol Crisis That Has Claimed Lives and Crippled Brazil's Beverage Industry",
            location: "SÃO PAULO, BRAZIL — October 6, 2025",
            paragraph1: "As Brazil grapples with a devastating methanol poisoning crisis that has left at least one person dead, 11 deaths under investigation, and over 100 suspected cases across multiple states, the Foundation Against Counterfeit Trade (FACT) is calling for urgent industry-wide adoption of proven authentication technology that could have prevented this public health catastrophe.",
            suspectedCases: "Suspected Cases",
            deathsConfirmed: "Deaths Confirmed or Under Investigation",
            revenueDrop: "Revenue Drop for Distilled Beverages",
            paragraph2: "The current crisis, concentrated primarily in São Paulo but spreading to at least five states and the capital Brasília, has devastated consumer confidence and brought Brazil's vibrant hospitality industry to its knees. Bars that once sold 80 caipirinhas per night are selling none. Restaurants have suspended liquor sales entirely. Health Minister Alexandre Padilha has issued unprecedented warnings for Brazilians to \"avoid distilled products, especially colorless ones.\"",
            paragraph3: "The tragedy? This was entirely preventable.",
            quote1: "Every single death, every person left blind or in a coma, every family destroyed by this crisis represents a failure of our industry to prioritize consumer safety over cost savings. The technology to prevent this has existed for six years. We've been protecting our consumers with it since day one. The question Brazil must answer now is: how many more lives will be lost before the industry acts?",
            quote1Author: "— Guilherme Boavista, Co-Founder, FACT",
            solutionTitle: "A Solution That Works: Six Years of Proven Protection",
            solutionText: "Since 2019, every bottle of Cãna Cachaça has been protected by FACT's patented blockchain-verified NFC authentication system (Patent US20210391993A1). Not a single case of counterfeit Cãna has entered the market. Not one consumer has been at risk from our products.",
            paragraph4: "FACT's technology creates an unbreakable chain of trust from bottling facility to consumer. Each bottle receives a tamper-evident, cryptographically secured NFC tag embedded in the cork or label. Any smartphone can scan the tag instantly—no app required—to verify authenticity in real-time. Every scan is logged to a blockchain-backed database, making it impossible for counterfeiters to duplicate or reuse tags without immediate detection.",
            howItStopsTitle: "How FACT Technology Stops Methanol Poisoning:",
            impossibleToCounterfeit: "Impossible to Counterfeit:",
            impossibleToCounterfeitDesc: "Cryptographically unique tags cannot be cloned with conventional technology",
            instantVerification: "Instant Consumer Verification:",
            instantVerificationDesc: "Any person can tap their phone to a bottle and receive immediate authenticity confirmation",
            tamperDetection: "Tamper Detection:",
            tamperDetectionDesc: "Physical seals show evidence of any attempt to open or refill bottles",
            supplyChainTransparency: "Supply Chain Transparency:",
            supplyChainTransparencyDesc: "Real-time tracking detects suspicious patterns, such as the same tag appearing in multiple locations",
            fraudAlerts: "Fraud Alerts:",
            fraudAlertsDesc: "System automatically flags reuse attempts or geographic anomalies",
            noAppRequired: "No App Required:",
            noAppRequiredDesc: "Works with any NFC-enabled smartphone, ensuring accessibility for all consumers",
            paragraph5: "The contrast with current market practices is stark. While FACT-protected bottles offer forensic-level authentication, the vast majority of Brazilian spirits rely on easily forged QR codes, visual seals that any print shop can reproduce, or no protection at all. These outdated approaches have created a vulnerability that organized crime has ruthlessly exploited—with deadly consequences.",
            quote2: "In February 2023, we presented this technology to Brazil's beverage industry. We showed them exactly how it works and why it's necessary. The response was silence. Companies chose the cheapest option instead of the safest one. Now we're counting bodies. This isn't about technology availability—it's about industry accountability.",
            quote2Author: "— Nick Walker, Co-Founder, FACT",
            paragraph6: "The current crisis has exposed the catastrophic cost of this inaction. Police have confirmed that counterfeit beverages contaminated with methanol are responsible for the poisonings, and authorities suspect possible links to organized crime networks. Federal police are investigating whether the same methanol illegally imported to adulterate fuel may have entered the alcohol supply chain.",
            paragraph7: "Meanwhile, Brazil's hospitality industry faces economic devastation. The Federation of Hotels, Restaurants, and Bars of the State of São Paulo estimates revenue losses of up to 50% on distilled beverages at some establishments, with the industry fearing an overall 30% drop in business. The government has established a crisis \"situation room\" and is making emergency purchases of methanol antidotes—treating symptoms while the root cause remains unaddressed.",
            pathForwardTitle: "The Path Forward: Immediate Industry Action Required",
            pathForwardText: "FACT is calling for mandatory authentication standards for all distilled beverages sold in Brazil. The technology exists. The infrastructure is proven. What's missing is the political and industry will to implement it.",
            paragraph8: "FACT is currently in urgent discussions with Brazilian health authorities, major spirits producers, international certification bodies, and retail chains to implement emergency authentication measures. The company has the capacity to begin immediate deployment and is offering expedited implementation support for any producer committed to protecting their consumers.",
            paragraph9: "\"This isn't about our company,\" Boavista emphasizes. \"This is about establishing a fundamental safety standard that should be non-negotiable: consumers should be able to verify with absolute certainty that the alcohol they're drinking is genuine. In 2025, in a country with nearly universal smartphone penetration, there is no excuse for preventable deaths from counterfeit alcohol.\"",
            paragraph10: "The question facing Brazil's beverage industry, regulators, and consumers is no longer whether such technology should be adopted—but how quickly it can be implemented before more lives are lost.",
            aboutTitle: "About FACT",
            aboutParagraph1: "The Foundation Against Counterfeit Trade (FACT) was established in 2019 by Nick Walker and Guilherme Boavista in response to the persistent threat of counterfeit alcohol in Brazil and Southeast Asia. FACT's patented blockchain-verified NFC authentication system (Patent US20210391993A1) has protected every bottle of Cãna Cachaça since its inception, with zero counterfeiting incidents in six years of deployment.",
            aboutParagraph2: "FACT's mission is to establish authentication verification as a fundamental consumer safety standard in the global alcohol market, making product verification as simple as tapping a smartphone. The company's technology combines tamper-evident physical seals with cryptographic authentication and blockchain-backed verification to create an unbreakable chain of trust from production to consumption.",
            mediaContactTitle: "Media Contact & Partnership Inquiries",
            email: "Email:",
            emergencySupport: "Emergency Deployment Support:",
            emergencySupportText: "Available immediately for qualifying producers",
            technicalNote: "For technical specifications and implementation details, please visit our website or contact our team directly."
        }
    },
    pt: {
        meta: {
            title: "FACT - Fundação de Autenticação e Certificação de Transparência",
            copyright: "© 2024 Fundação de Autenticação e Certificação de Transparência. Construindo um mercado global de álcool mais seguro e responsável."
        },
        nav: {
            platform: "Plataforma",
            demo: "Experimente o Demo",
            faq: "FAQ",
            contact: "Contato",
            brandLogin: "Login",
            scanNow: "ESCANEAR FACTTAG"
        },
        hero: {
            title: "Verifique a Autenticidade com um Toque",
            subtitle: "Combata o álcool falsificado com tecnologia NFC verificada por blockchain. Proteja consumidores, marcas e governos com autenticação instantânea.",
            learnMore: "Saiba Mais",
            getStarted: "Começar",
            scanNow: "Escanear FACT Tag",
            verified: "✓ Autenticado"
        },
        mission: {
            title: "Nossa Missão",
            description: "Nossa missão é proteger as principais marcas do mundo da falsificação — e proteger os consumidores de engano, danos ou até morte causada por produtos falsos.",
            banner: "Defender grandes marcas e salvar vidas acabando com o álcool falsificado na origem."
        },
        features: {
            title: "Principais Recursos",
            tamperEvident: {
                title: "À Prova de Violação",
                description: "Segurança física e digital garante que qualquer tentativa de violação seja detectada e registrada."
            },
            blockchain: {
                title: "Verificado por Blockchain",
                description: "Cada leitura é autenticada por tecnologia de blockchain imutável, garantindo total transparência e privacidade."
            },
            noApp: {
                title: "Sem Aplicativo Necessário*",
                description: "Funciona em qualquer smartphone com NFC. Basta encostar e verificar — sem downloads. (*Menos iPhone)"
            },
            globalTracking: {
                title: "Rastreamento Global",
                description: "Monitoramento em tempo real detecta padrões suspeitos e tentativas de fraude na cadeia de suprimentos."
            },
            analytics: {
                title: "Painel de Análises",
                description: "Percepções abrangentes de dados para marcas e autoridades acompanharem distribuição e conformidade."
            },
            durability: {
                title: "Durabilidade Estendida",
                description: "Chips NFC passivos não precisam de bateria e duram mais de 10 anos, garantindo proteção a longo prazo."
            }
        },
        howItWorks: {
            title: "Como Funciona",
            step1: { title: "Integração da Etiqueta", description: "Etiquetas NFC inseridas no engarrafamento com chaves criptografadas únicas" },
            step2: { title: "Rastreamento por NFC/RFID", description: "Leitura a cada passo da cadeia de suprimentos." },
            step3: { title: "Verificação Instantânea", description: "Autenticação em tempo real confirma a genuinidade do produto" },
            step4: { title: "Registro de Dados", description: "Todas as leituras são monitoradas para padrões de fraude e alertas" }
        },
        benefits: {
            title: "Benefícios para Todos os Públicos",
            consumers: { title: "Para Consumidores", description: "Tranquilidade ao saber que você consome produtos seguros e autênticos. Verificação instantânea ao seu alcance." },
            brands: { title: "Para Marcas", description: "Proteja a reputação, reduza perdas por falsificação e obtenha insights valiosos da cadeia de suprimentos." },
            governments: { title: "Para Governos", description: "Combata o comércio ilícito, melhore a arrecadação e fortaleça a proteção da saúde pública." },
            retailers: { title: "Para Varejistas", description: "Verifique a integridade do inventário instantaneamente e crie confiança com produtos autenticados." }
        },
        faq: {
            metaTitle: "FACT - FAQ",
            title: "FACT Perguntas Frequentes",
            backLink: "← Voltar para a página inicial",
            questions: {
                q1: {
                    question: "Por que isso é melhor que soluções tradicionais?",
                    answer: "Soluções tradicionais como hologramas e códigos impressos podem ser facilmente copiados. As tags NFC são únicas e criptografadas — impossíveis de clonar. O sistema registra cada interação (fabricação, distribuição, abertura do lacre) criando um histórico completo que identifica padrões suspeitos automaticamente através de IA. Para verificar a autenticidade: usuários Android acessam www.facttag.info, e usuários iPhone baixam nosso app leve e intuitivo."
                },
                q2: {
                    question: "Como funciona a leitura? É manual, garrafa por garrafa?",
                    answer: "Não precisa ser manual. As caixas têm tags RFID que podem ser lidas à distância de até 20 metros através de portais instalados em pontos estratégicos da cadeia (saída da fábrica, entrada no distribuidor, pontos de venda). Para caixas lacradas com 6 ou 12 garrafas, basta passar pelo portal e todas são registradas simultaneamente. Leituras manuais também são possíveis via smartphone quando necessário ou pelo consumidor final/estabelecimento."
                },
                q3: {
                    question: "E se reutilizarem a tampa em outras garrafas adulteradas?",
                    answerIntro: "A IA da plataforma gera alertas baseados no padrão de consumo: volume, perfil do cliente, tempo em prateleira, momento de abertura do lacre (se tiver o lacre FACT Tag Pro) e tipo de produto. Por exemplo:",
                    barExample: "Bar/Clube: O sistema sabe que o estabelecimento recebe 20 garrafas de whisky premium por semana. Se uma tampa de um lote entregue há 3 semanas aparecer em uma \"nova\" garrafa, o alerta dispara. Se essa garrafa for consumida em 2 dias (quando o padrão normal é 5-7 dias), confirma-se a suspeita.",
                    supermarketExample: "Supermercado: Uma rede recebe 500 unidades mensais de vodka. Se tampas de lotes antigos começarem a circular em volume anormal, ou se o tempo entre entrega e \"venda\" for inconsistente com o histórico, o sistema identifica imediatamente.",
                    distributorExample: "Distribuidor: Se a mesma tampa circular entre múltiplos pontos de venda em sequência, ou se aparecer em locais não autorizados pela cadeia de distribuição oficial, os algoritmos detectam o desvio.",
                    analysisSummary: "O sistema cruza: localização geográfica, tempo entre transações, perfil de consumo do estabelecimento e histórico do lote para identificar irregularidades que seriam invisíveis humanamente."
                },
                q4: {
                    question: "Como previne a manipulação do líquido após abrir a garrafa?",
                    answerPrimary: "O sistema detecta o momento exato em que o lacre é rompido e monitora o padrão de consumo. Se a garrafa é aberta, fechada e volta a circular de forma irregular, os algoritmos de IA reconhecem os desvios e notificam o fabricante imediatamente.",
                    answerSecondary: "Embora não elimine 100% o risco de adulteração no consumo final (em casa), dificulta drasticamente a adulteração em escala na cadeia de distribuição — onde o problema realmente acontece e causa danos significativos."
                },
                q5: {
                    question: "O consumidor consegue verificar a autenticidade?",
                    answer: "Sim! Usuários Android acessam www.facttag.info e usuários iPhone baixam nosso app leve. Basta aproximar o smartphone da tampa (NFC). O sistema mostra instantaneamente: autenticidade do produto, data de fabricação, lote, histórico de movimentação e informações adicionais sobre o produto."
                },
                q6: {
                    question: "Qual o impacto real da falsificação?",
                    answerIntro: "A indústria de bebidas falsificadas movimenta estimados R$55 bilhões anuais somente no Brasil, causando:",
                    losses: "Prejuízos massivos aos fabricantes legítimos",
                    tax: "Perda de arrecadação tributária",
                    health: "Riscos graves à saúde pública: produtos falsificados frequentemente contêm metanol e outras substâncias tóxicas que causam intoxicações, cegueira e até morte",
                    brand: "Danos irreparáveis à reputação de marcas consolidadas",
                    answerSummary: "O custo de implementação do sistema é insignificante comparado aos danos causados pela falsificação."
                },
                q7: {
                    question: "Quanto custa implementar isso?",
                    answer: "O custo por tag NFC varia conforme o volume, mas geralmente fica entre R$0,50 a R$2,00 por unidade em escala. Tags RFID para caixas custam entre R$0,30 a R$5,00. Considerando o prejuízo estimado de R$55 bilhões com produtos falsificados, os riscos à saúde pública e os danos à marca, o ROI costuma ser positivo em 6-12 meses para a maioria dos fabricantes."
                },
                q8: {
                    question: "É 100% infalível?",
                    answer: "Não, nenhum sistema é. Mas é significativamente mais robusto que qualquer solução disponível hoje. A combinação de hardware único (tags NFC/RFID), criptografia, rastreamento em tempo real e análise de IA cria múltiplas camadas de proteção que tornam a falsificação extremamente difícil e economicamente inviável para fraudadores."
                },
                q9: {
                    question: "Funciona offline?",
                    answer: "Sim! A verificação básica de autenticidade funciona offline — você consegue escanear e confirmar que existe uma tag legítima adequadamente posicionada. Porém, para acessar o histórico completo de movimentação e verificar as informações mais recentes da cadeia de suprimentos, é necessário conexão com a internet. Assim que houver conexão, todos os dados são sincronizados automaticamente."
                }
            }
        },
        footer: {
            title: "Junte-se à Luta Contra o Comércio de Falsificações",
            subtitle: "Seja parceiro da FACT para estabelecer um novo padrão onde a verificação de autenticidade está a um toque de distância.",
            contactUs: "Fale Conosco Hoje",
            patentPrefix: "Impulsionado pela mais recente tecnologia criptográfica. Patente:",
            patentLinkLabel: "US20210391993A1",
            copyright: "© 2024 Fundação Contra o Comércio de Falsificações. Construindo um mercado global de álcool mais seguro e responsável."
        },
        demo: {
            pageTitle: "Demo Interativo",
            pageSubtitle: "Experimente o sistema de verificação NFC da FACT em ação. Esta é uma demonstração simulada mostrando como os consumidores verificam a autenticidade do produto e como as marcas monitoram sua cadeia de suprimentos em tempo real.",
            consumerTab: "Leitura do Consumidor",
            brandTab: "Painel da Marca",
            simulationBadge: "DEMO SIMULADO - Clique para ver como funciona",
            factVerify: "FACT Verificar",
            consumerSubtitle: "Experimente como os consumidores verificam a autenticidade do produto",
            nfcEnabled: "NFC Habilitado",
            scanButton: "Experimentar Leitura Simulada",
            scanningButton: "Simulando Leitura...",
            simulationNote: "Esta é uma simulação de demonstração da experiência do consumidor",
            brandDashboardLink: "Proprietário da Marca? Acessar Painel →",
            backButton: "← Voltar",
            verifiedTitle: "✓ Autenticidade Verificada",
            verifiedSubtitle: "Este produto foi verificado no blockchain",
            productJourney: "Jornada do Produto",
            brand: "Marca",
            bottleNumber: "Garrafa nº",
            batch: "Lote",
            manufactured: "Fabricado",
            supplyChainJourney: "Jornada da Cadeia de Suprimentos",
            productId: "ID do Produto",
            brandDashboard: "Painel da Marca",
            overview: "Visão Geral",
            geographic: "Geográfico",
            alerts: "Alertas",
            products: "Produtos",
            backToScanner: "Voltar ao Scanner",
            totalProducts: "Total de Produtos",
            scansToday: "Leituras Hoje",
            verifiedToday: "Verificados Hoje",
            suspicious: "Suspeitos",
            realTimeScans: "Leituras em Tempo Real",
            topLocations: "Principais Locais de Leitura",
            scans: "leituras",
            suspiciousScans: "leituras suspeitas",
            verified: "verificado",
            features: {
                blockchain: "Verificado por Blockchain",
                instant: "Resultados Instantâneos",
                traceability: "Rastreabilidade Completa"
            },
            stages: {
                manufacturing: "Fabricação",
                warehouse: "Armazém",
                shipping: "Transporte Internacional",
                distributor: "Distribuidor",
                retail: "Varejo/Ponto de Venda",
                consumer: "Verificação do Consumidor"
            },
            operator: "Operador:",
            documents: "Documentos:",
            alertsManagement: "Gerenciamento de Alertas",
            all: "Todos",
            critical: "Crítico",
            active: "Ativo",
            alertTypes: {
                counterfeit_detected: "Falsificação Detectada",
                unusual_pattern: "Padrão de Leitura Incomum",
                location_mismatch: "Incompatibilidade de Localização",
                duplicate_scan: "Leitura Duplicada Detectada",
                verification_failure: "Falha na Verificação"
            },
            alertStatus: {
                active: "Ativo",
                investigating: "Investigando",
                reviewing: "Analisando",
                resolved: "Resolvido"
            },
            investigate: "Investigar",
            resolve: "Resolver",
            productInventory: "Inventário de Produtos",
            flagged: "Sinalizado",
            productName: "Nome do Produto",
            currentLocation: "Localização Atual",
            lastScan: "Última Leitura",
            productStatus: {
                active: "Ativo",
                flagged: "Sinalizado",
                inactive: "Inativo"
            },
            geographicDistribution: "Distribuição Geográfica",
            interactiveMap: "Mapa Interativo (Demo)",
            minutesAgo: "min atrás",
            hoursAgo: "h atrás",
            daysAgo: "dias atrás"
        },
        aboutPage: {
            metaTitle: "Sobre Nós - FACT",
            title: "Sobre Nós",
            intro: "A FACT (Fundação de Autenticação e Certificação de Transparencia) é uma coalizão de tecnólogos, especialistas  e parceiros de marcas comprometidos em impedir que produtos falsificados cheguem aos consumidores. Combinamos inteligência moderna de cadeia de suprimentos com atuação cooperativa para construir confiança no mercado global.",
            missionTitle: "Nossa Missão",
            missionBody: "Existimos para fazer da autenticidade a expectativa padrão onde quer que as pessoas comprem. Ao conectar marcas, marketplaces e reguladores com insights em tempo real, a FACT ajuda produtos legítimos a circularem livremente enquanto desativa as redes que permitem a falsificação.",
            howTitle: "Como Atuamos",
            howIntro: "Adotamos uma abordagem em várias camadas para proteger consumidores e salvaguardar marcas:",
            howItems: {
                intelligenceTitle: "Inteligência:",
                intelligenceBody: "Monitoramos sinais da cadeia de suprimentos e anúncios on-line para identificar atividades suspeitas antes que elas se espalhem.",
                collaborationTitle: "Colaboração:",
                collaborationBody: "Conectamos fabricantes, varejistas e parceiros de aplicação da lei para coordenar ações rápidas.",
                educationTitle: "Educação:",
                educationBody: "Capacitamos consumidores e equipes na linha de frente com ferramentas para reconhecer e reportar produtos falsificados."
            },
            impactTitle: "Impacto",
            impactBody: "Nossa equipe tem ajudado marcas a proteger seus portfólios de propriedade intelectual, recuperar receitas perdidas e restaurar a confiança de seus clientes. Cada investigação fortalece nossa rede de inteligência compartilhada, criando um efeito cascata que mantém produtos falsificados fora das prateleiras e dos lares.",
            teamTitle: "Quem Somos",
            teamBody: "A FACT reúne especialistas em ciência de dados, política pública, logística e defesa do consumidor. Atuamos em parceria com ONGs, associações comerciais e órgãos públicos para garantir que comunidades ao redor do mundo se beneficiem de um comércio mais seguro.",
            joinTitle: "Participe",
            joinBody1: "O comércio de falsificações evolui rápido, então nossas defesas precisam evoluir ainda mais rapidamente.",
            joinBody2: "Se você é um detentor de marca, operador de marketplace ou defensor do consumidor interessado em colaborar com a FACT, entre em contato pela nossa ",
            contactLinkLabel: "página de contato",
            joinBody3: " para iniciar a conversa.",
            backLink: "← Voltar para a página inicial"
        },
        pressRelease: {
            forImmediateRelease: "PARA DIVULGAÇÃO IMEDIATA",
            date: "Data:",
            contact: "Contato:",
            website: "Site:",
            title: "Crise do Metanol no Brasil: Uma Tragédia Evitável Que Exige Ação Imediata",
            subtitle: "Tecnologia de Autenticação Patenteada da FACT, Protegendo Consumidores com Sucesso Desde 2019, Oferece Solução Imediata para Combater Crise de Álcool Falsificado Que Tirou Vidas e Paralisou a Indústria de Bebidas do Brasil",
            location: "SÃO PAULO, BRASIL — 6 de Outubro de 2025",
            paragraph1: "Enquanto o Brasil enfrenta uma devastadora crise de envenenamento por metanol que deixou pelo menos uma pessoa morta, 11 mortes sob investigação e mais de 100 casos suspeitos em vários estados, a Fundação de Autenticação e Certificação de Transparencia (FACT) está pedindo a adoção urgente em toda a indústria de tecnologia de autenticação comprovada que poderia ter evitado esta catástrofe de saúde pública.",
            suspectedCases: "Casos Suspeitos",
            deathsConfirmed: "Mortes Confirmadas ou Sob Investigação",
            revenueDrop: "Queda de Receita em Bebidas Destiladas",
            paragraph2: "A crise atual, concentrada principalmente em São Paulo, mas se espalhando para pelo menos cinco estados e a capital Brasília, devastou a confiança do consumidor e levou a vibrante indústria de hospitalidade do Brasil de joelhos. Bares que vendiam 80 caipirinhas por noite não vendem nenhuma. Restaurantes suspenderam completamente as vendas de bebidas alcoólicas. O Ministro da Saúde Alexandre Padilha emitiu avisos sem precedentes para que os brasileiros \"evitem produtos destilados, especialmente os incolores\".",
            paragraph3: "A tragédia? Isso era totalmente evitável.",
            quote1: "Cada morte, cada pessoa que ficou cega ou em coma, cada família destruída por esta crise representa uma falha da nossa indústria em priorizar a segurança do consumidor sobre economia de custos. A tecnologia para prevenir isso existe há seis anos. Estamos protegendo nossos consumidores com ela desde o primeiro dia. A pergunta que o Brasil deve responder agora é: quantas vidas mais serão perdidas antes que a indústria aja?",
            quote1Author: "— Guilherme Boavista, Co-Fundador, FACT",
            solutionTitle: "Uma Solução Que Funciona: Seis Anos de Proteção Comprovada",
            solutionText: "Desde 2019, cada garrafa de Cãna Cachaça tem sido protegida pelo sistema de autenticação NFC verificado por blockchain patenteado da FACT (Patente US20210391993A1). Nenhum caso de Cãna falsificada entrou no mercado. Nenhum consumidor esteve em risco com nossos produtos.",
            paragraph4: "A tecnologia da FACT cria uma cadeia de confiança inquebrável desde a instalação de engarrafamento até o consumidor. Cada garrafa recebe uma etiqueta NFC à prova de violação, criptograficamente protegida, incorporada na rolha ou no rótulo. Qualquer smartphone pode escanear a etiqueta instantaneamente — sem necessidade de aplicativo — para verificar a autenticidade em tempo real. Cada leitura é registrada em um banco de dados com suporte de blockchain, tornando impossível para os falsificadores duplicar ou reutilizar etiquetas sem detecção imediata.",
            howItStopsTitle: "Como a Tecnologia FACT Impede o Envenenamento por Metanol:",
            impossibleToCounterfeit: "Impossível de Falsificar:",
            impossibleToCounterfeitDesc: "Etiquetas criptograficamente únicas não podem ser clonadas com tecnologia convencional",
            instantVerification: "Verificação Instantânea pelo Consumidor:",
            instantVerificationDesc: "Qualquer pessoa pode tocar o telefone em uma garrafa e receber confirmação imediata de autenticidade",
            tamperDetection: "Detecção de Violação:",
            tamperDetectionDesc: "Selos físicos mostram evidências de qualquer tentativa de abrir ou reencher garrafas",
            supplyChainTransparency: "Transparência da Cadeia de Suprimentos:",
            supplyChainTransparencyDesc: "Rastreamento em tempo real detecta padrões suspeitos, como a mesma etiqueta aparecendo em vários locais",
            fraudAlerts: "Alertas de Fraude:",
            fraudAlertsDesc: "O sistema sinaliza automaticamente tentativas de reutilização ou anomalias geográficas",
            noAppRequired: "Sem Necessidade de Aplicativo:",
            noAppRequiredDesc: "Funciona com qualquer smartphone habilitado para NFC, garantindo acessibilidade para todos os consumidores",
            paragraph5: "O contraste com as práticas atuais de mercado é gritante. Enquanto as garrafas protegidas pela FACT oferecem autenticação de nível forense, a grande maioria dos destilados brasileiros depende de códigos QR facilmente falsificados, selos visuais que qualquer gráfica pode reproduzir, ou nenhuma proteção. Essas abordagens desatualizadas criaram uma vulnerabilidade que o crime organizado explorou sem piedade — com consequências mortais.",
            quote2: "Em fevereiro de 2023, apresentamos essa tecnologia à indústria de bebidas do Brasil. Mostramos exatamente como funciona e por que é necessária. A resposta foi silêncio. As empresas escolheram a opção mais barata ao invés da mais segura. Agora estamos contando corpos. Isso não é sobre disponibilidade de tecnologia — é sobre responsabilidade da indústria.",
            quote2Author: "— Nick Walker, Co-Fundador, FACT",
            paragraph6: "A crise atual expôs o custo catastrófico dessa inação. A polícia confirmou que bebidas falsificadas contaminadas com metanol são responsáveis pelos envenenamentos, e as autoridades suspeitam de possíveis ligações com redes de crime organizado. A polícia federal está investigando se o mesmo metanol importado ilegalmente para adulterar combustível pode ter entrado na cadeia de suprimento de álcool.",
            paragraph7: "Enquanto isso, a indústria de hospitalidade do Brasil enfrenta devastação econômica. A Federação de Hotéis, Restaurantes e Bares do Estado de São Paulo estima perdas de receita de até 50% em bebidas destiladas em alguns estabelecimentos, com a indústria temendo uma queda geral de 30% nos negócios. O governo estabeleceu uma \"sala de situação\" de crise e está fazendo compras emergenciais de antídotos para metanol — tratando sintomas enquanto a causa raiz permanece não abordada.",
            pathForwardTitle: "O Caminho a Seguir: Ação Imediata da Indústria Necessária",
            pathForwardText: "A FACT está pedindo padrões obrigatórios de autenticação para todas as bebidas destiladas vendidas no Brasil. A tecnologia existe. A infraestrutura está comprovada. O que falta é a vontade política e da indústria para implementá-la.",
            paragraph8: "A FACT está atualmente em discussões urgentes com as autoridades de saúde brasileiras, grandes produtores de destilados, organismos de certificação internacionais e redes de varejo para implementar medidas de autenticação de emergência. A empresa tem capacidade para começar a implantação imediata e está oferecendo suporte de implementação acelerada para qualquer produtor comprometido em proteger seus consumidores.",
            paragraph9: "\"Isso não é sobre nossa empresa\", enfatiza Boavista. \"Isso é sobre estabelecer um padrão de segurança fundamental que deveria ser inegociável: os consumidores devem poder verificar com certeza absoluta que o álcool que estão bebendo é genuíno. Em 2025, em um país com penetração quase universal de smartphones, não há desculpa para mortes evitáveis por álcool falsificado.\"",
            paragraph10: "A questão que enfrenta a indústria de bebidas, reguladores e consumidores do Brasil não é mais se tal tecnologia deve ser adotada — mas quão rapidamente ela pode ser implementada antes que mais vidas sejam perdidas.",
            aboutTitle: "Sobre a FACT",
            aboutParagraph1: "A Fundação de Autenticação e Certificação de Transparencia (FACT) foi estabelecida em 2019 por Nick Walker e Guilherme Boavista em resposta à ameaça persistente de álcool falsificado no Brasil e no Sudeste Asiático. O sistema de autenticação NFC verificado por blockchain patenteado da FACT (Patente US20210391993A1) protegeu cada garrafa de Cãna Cachaça desde o seu início, com zero incidentes de falsificação em seis anos de implantação.",
            aboutParagraph2: "A missão da FACT é estabelecer a verificação de autenticação como um padrão fundamental de segurança do consumidor no mercado global de álcool, tornando a verificação de produtos tão simples quanto tocar um smartphone. A tecnologia da empresa combina selos físicos à prova de violação com autenticação criptográfica e verificação com suporte de blockchain para criar uma cadeia de confiança inquebrável da produção ao consumo.",
            mediaContactTitle: "Contato para Imprensa e Consultas de Parceria",
            email: "E-mail:",
            emergencySupport: "Suporte de Implantação de Emergência:",
            emergencySupportText: "Disponível imediatamente para produtores qualificados",
            technicalNote: "Para especificações técnicas e detalhes de implementação, visite nosso site ou entre em contato diretamente com nossa equipe."
        }
    },
    fr: {
        meta: {
            title: "FACT - Fondation d’Authentification et de Certification contre le Trafic de Contrefaçons.",
            copyright: "© 2024 Fondation d’Authentification et de Certification contre le Trafic de Contrefaçons.. Construire un marché mondial de l'alcool plus sûr et plus responsable."
        },
        nav: {
            platform: "Plateforme",
            demo: "Essayer la démo",
            faq: "FAQ",
            contact: "Contact",
            brandLogin: "Login",
            scanNow: "Scanner FACT Tag"
        },
        hero: {
            title: "Vérifiez l'authenticité en un simple geste",
            subtitle: "Luttez contre l'alcool contrefait avec la technologie NFC vérifiée par blockchain. Protégez les consommateurs, les marques et les gouvernements avec une authentification instantanée.",
            learnMore: "En savoir plus",
            getStarted: "Commencer",
            scanNow: "Scanner FACT Tag",
            verified: "✓ Authentifié"
        },
        mission: {
            title: "Notre Mission",
            description: "Notre mission est de protéger les plus grandes marques mondiales de la contrefaçon — et de protéger les consommateurs de la tromperie, des dommages ou même de la mort causée par de faux produits.",
            banner: "Défendre les grandes marques et sauver des vies en mettant fin à l'alcool contrefait à la source."
        },
        features: {
            title: "Fonctionnalités clés",
            tamperEvident: {
                title: "À Preuve de Falsification",
                description: "La sécurité physique et numérique garantit que toute tentative de falsification est détectée et enregistrée immédiatement."
            },
            blockchain: {
                title: "Vérifié par Blockchain",
                description: "Chaque scan est authentifié via une blockchain immuable, garantissant une transparence totale."
            },
            noApp: {
                title: "Aucune application requise",
                description: "Fonctionne avec tout smartphone compatible NFC. Touchez et vérifiez — aucune installation nécessaire."
            },
            globalTracking: {
                title: "Suivi mondial",
                description: "La surveillance en temps réel détecte les schémas suspects et les tentatives de fraude dans la chaîne d'approvisionnement."
            },
            analytics: {
                title: "Tableau de bord analytique",
                description: "Des informations complètes pour suivre la distribution et la conformité."
            },
            durability: {
                title: "Durabilité prolongée",
                description: "Les puces NFC passives ne nécessitent pas de batterie et durent plus de 10 ans, assurant une protection à long terme."
            }
        },
        howItWorks: {
            title: "Comment ça marche",
            step1: { title: "Intégration des étiquettes", description: "Étiquettes NFC intégrées à l'embouteillage avec des clés chiffrées uniques" },
            step2: { title: "Scan du consommateur", description: "Un simple contact ouvre une page web sécurisée de vérification" },
            step3: { title: "Vérification instantanée", description: "L'authentification en temps réel confirme l'authenticité du produit" },
            step4: { title: "Enregistrement des données", description: "Tous les scans sont surveillés pour détecter les schémas de fraude et les alertes" }
        },
        benefits: {
            title: "Bénéfices pour toutes les parties prenantes",
            consumers: { title: "Pour les consommateurs", description: "La tranquillité d'esprit en consommant des produits sûrs et authentiques. Vérification instantanée à portée de main." },
            brands: { title: "Pour les marques", description: "Protégez votre réputation, réduisez les pertes liées à la contrefaçon et obtenez des informations précieuses sur la chaîne d'approvisionnement." },
            governments: { title: "Pour les gouvernements", description: "Luttez contre le commerce illicite, améliorez la conformité fiscale et renforcez la santé publique." },
            retailers: { title: "Pour les détaillants", description: "Vérifiez instantanément l'intégrité des stocks et renforcez la confiance des clients grâce à des produits authentifiés." }
        },
        faq: {
            metaTitle: "FACT FAQ",
            title: "FACT - FAQ",
            backLink: "← Retour à l'accueil",
            questions: {
                q1: {
                    question: "Pourquoi est-ce meilleur que les solutions traditionnelles ?",
                    answer: "Les solutions traditionnelles comme les hologrammes et les QR codes imprimés peuvent être facilement copiées. Les tags NFC sont uniques et cryptées — impossibles à cloner. Le système enregistre chaque interaction (fabrication, distribution, rupture du sceau) créant un historique complet qui identifie automatiquement les schémas suspects grâce à l'IA. Pour vérifier l'authenticité : les utilisateurs Android accèdent à www.facttag.info, et les utilisateurs iPhone téléchargent notre application légère et intuitive."
                },
                q2: {
                    question: "Comment fonctionne la lecture ? Manuellement, bouteille par bouteille ?",
                    answer: "Pas nécessairement manuel. Les cartons ont des tags RFID qui peuvent être lues à des distances allant jusqu'à 10 mètres via des portails installés aux points stratégiques de la chaîne d'approvisionnement (sortie d'usine, entrée distributeur, points de vente). Pour les cartons scellés de 6 ou 12 bouteilles, il suffit de passer par le portail et toutes les unités sont enregistrées simultanément. Des lectures manuelles via smartphone sont également possibles si nécessaire."
                },
                q3: {
                    question: "Et si quelqu'un réutilise le bouchon sur d'autres bouteilles contrefaites ?",
                    answerIntro: "L'IA de la plateforme génère des alertes basées sur les schémas de consommation : volume, profil client, temps en rayon, moment de rupture du sceau (avec la FACT Tag Pro) et type de produit. Par exemple :",
                    barExample: "Bar/Club : Le système sait que l'établissement reçoit 20 bouteilles de whisky premium par semaine. Si un bouchon d'un lot livré il y a 3 semaines apparaît sur une « nouvelle » bouteille, une alerte se déclenche. Si cette bouteille est consommée en 2 jours (alors que le schéma normal est 5-7 jours), la suspicion est confirmée.",
                    supermarketExample: "Supermarché : Une chaîne reçoit 500 unités de vodka mensuellement. Si des bouchons d'anciens lots commencent à circuler en volumes anormaux, ou si le temps entre livraison et « vente » est incohérent avec les données historiques, le système l'identifie immédiatement.",
                    distributorExample: "Distributeur : Si le même bouchon circule entre plusieurs points de vente séquentiellement, ou apparaît dans des lieux non autorisés par la chaîne de distribution officielle, les algorithmes détectent l'écart.",
                    analysisSummary: "Le système croise : localisation géographique, temps entre transactions, profil de consommation de l'établissement et historique du lot pour identifier des irrégularités qui seraient humanement invisibles."
                },
                q4: {
                    question: "Comment empêche-t-il la manipulation du liquide après ouverture de la bouteille ?",
                    answerPrimary: "Le système détecte le moment exact où le sceau est rompu et surveille les schémas de consommation. Si une bouteille est ouverte, refermée par un fraudeur et retourne en circulation de manière irrégulière, les algorithmes d'IA reconnaissent les écarts et notifient immédiatement le fabricant ou les autorités sanitaires.",
                    answerSecondary: "Bien qu'il n'élimine pas 100% du risque de falsification à la consommation finale (à domicile), il empêche drastiquement la falsification à grande échelle dans la chaîne de distribution — là où le problème se produit réellement et cause des dommages significatifs."
                },
                q5: {
                    question: "Les consommateurs peuvent-ils vérifier l'authenticité ?",
                    answer: "Oui ! Les utilisateurs Android accèdent à www.facttag.info et les utilisateurs iPhone téléchargent notre application légère. Il suffit d'approcher le smartphone du bouchon (NFC). Le système affiche instantanément : authenticité du produit, date de fabrication, lot, historique des mouvements et informations supplémentaires sur le produit."
                },
                q6: {
                    question: "Quel est l'impact réel de la contrefaçon ?",
                    answerIntro: "L'industrie des boissons contrefaites représente environ 55 milliards de R$ par an rien qu'au Brésil, causant :",
                    losses: "Des pertes massives aux fabricants légitimes",
                    tax: "Des pertes de recettes fiscales",
                    health: "Des risques graves pour la santé publique : les produits contrefaits contiennent souvent du méthanol et d'autres substances toxiques causant intoxications, cécité et même la mort",
                    brand: "Des dommages irréparables à la réputation des marques établies",
                    answerSummary: "Le coût de mise en œuvre du système est insignifiant comparé aux dommages causés par la contrefaçon."
                },
                q7: {
                    question: "Combien coûte la mise en œuvre ?",
                    answer: "Le coût par tag NFC varie selon le volume, mais se situe généralement entre 0,50 R$ et 2,00 R$ par unité à grande échelle. Les tags RFID pour cartons coûtent entre 0,30 R$ et 5,00 R$. Compte tenu de la perte estimée de 55 milliards de R$ due aux produits contrefaits, des risques pour la santé publique et des dommages à la marque, le retour sur investissement est généralement positif en 6-12 mois pour la plupart des fabricants."
                },
                q8: {
                    question: "Est-ce infaillible à 100% ?",
                    answer: "Aucun système ne l'est. Mais il est significativement plus robuste que toute solution disponible aujourd'hui. La combinaison de matériel unique (tags NFC/RFID), cryptage, traçabilité en temps réel et analyse par IA crée de multiples couches de protection qui rendent la contrefaçon extrêmement difficile et économiquement non viable pour les fraudeurs."
                },
                q9: {
                    question: "Fonctionne-t-il hors ligne ?",
                    answer: "Oui ! La vérification basique d'authenticité fonctionne hors ligne — vous pouvez scanner et confirmer qu'il existe un tag légitime correctement positionné. Cependant, pour accéder à l'historique complet des mouvements et vérifier les informations les plus récentes de la chaîne d'approvisionnement, une connexion Internet est nécessaire. Dès qu'il y a connexion, toutes les données se synchronisent automatiquement."
                }
            }
        },
        aboutPage: {
            metaTitle: "À propos de nous - FACT",
            title: "À propos de nous",
            intro: "FACT (Fondation d’Authentification et de Certification contre le Trafic de Contrefaçons.) est une coalition de technologues, d'experts en politiques publiques, d'enquêteurs et de partenaires de marques déterminés à empêcher les produits contrefaits d'atteindre les consommateurs. Nous combinons une intelligence moderne de la chaîne d'approvisionnement avec une application coopérative pour instaurer la confiance sur le marché mondial.",
            missionTitle: "Notre mission",
            missionBody: "Nous voulons faire de l'authenticité l'attente par défaut partout où les gens achètent. En reliant marques, places de marché et régulateurs à des informations en temps réel, FACT aide les produits légitimes à circuler librement tout en démantelant les réseaux qui alimentent la contrefaçon.",
            howTitle: "Notre approche",
            howIntro: "Nous adoptons une approche à plusieurs niveaux pour protéger les consommateurs et sécuriser les marques :",
            howItems: {
                intelligenceTitle: "Veille :",
                intelligenceBody: "Nous surveillons les signaux de la chaîne d'approvisionnement et les annonces en ligne pour repérer les activités suspectes avant qu'elles ne se propagent.",
                collaborationTitle: "Collaboration :",
                collaborationBody: "Nous connectons fabricants, détaillants et forces de l'ordre afin de coordonner des actions rapides.",
                educationTitle: "Sensibilisation :",
                educationBody: "Nous donnons aux consommateurs et aux équipes de terrain les outils pour reconnaître et signaler les produits contrefaits."
            },
            impactTitle: "Impact",
            impactBody: "Notre équipe a aidé les marques à protéger leurs portefeuilles de propriété intellectuelle, à récupérer des revenus perdus et à restaurer la confiance de leurs clients. Chaque enquête renforce notre réseau d'intelligence partagée, créant un effet domino qui maintient les produits contrefaits hors des rayons et des foyers.",
            teamTitle: "Qui nous sommes",
            teamBody: "FACT réunit des spécialistes en science des données, en politique publique, en logistique et en défense des consommateurs. Nous collaborons avec des ONG, des associations professionnelles et des organismes publics pour garantir des échanges plus sûrs partout dans le monde.",
            joinTitle: "Rejoindre l'action",
            joinBody1: "Le commerce de la contrefaçon évolue vite, nos défenses doivent aller encore plus vite.",
            joinBody2: "Si vous êtes un propriétaire de marque, un opérateur de marketplace ou un défenseur des consommateurs souhaitant collaborer avec FACT, contactez-nous via notre ",
            contactLinkLabel: "page de contact",
            joinBody3: " pour entamer la discussion.",
            backLink: "← Retour à l'accueil"
        },
        footer: {
            title: "Rejoignez la lutte contre le commerce de contrefaçons",
            subtitle: "Partenaire de FACT pour établir une nouvelle norme où la vérification d'authenticité est à portée de main.",
            contactUs: "Contactez-nous dès aujourd'hui",
            patentPrefix: "Propulsé par la dernière technologie cryptographique. Brevet :",
            patentLinkLabel: "US20210391993A1",
            copyright: "© 2024 Fondation d’Authentification et de Certification contre le Trafic de Contrefaçons.. Construire un marché mondial de l'alcool plus sûr et plus responsable."
        }
    },
    th: {
        meta: {
            title: "FACT - มูลนิธิต่อต้านการค้าสินค้าปลอม",
            copyright: "© 2024 มูลนิธิต่อต้านการค้าสินค้าปลอม สร้างตลาดแอลกอฮอล์โลกที่ปลอดภัยและรับผิดชอบมากขึ้น"
        },
        nav: {
            platform: "แพลตฟอร์ม",
            demo: "ลองเดโม่",
            faq: "คำถามที่พบบ่อย",
            contact: "ติดต่อ",
            brandLogin: "เข้าสู่ระบบแบรนด์",
            scanNow: "สแกนตอนนี้"
        },
        hero: {
            title: "ยืนยันความแท้ด้วยการแตะเพียงครั้งเดียว",
            subtitle: "ต่อสู้กับเครื่องดื่มแอลกอฮอล์ปลอมด้วยเทคโนโลยี NFC ที่ยืนยันโดยบล็อกเชน ปกป้องผู้บริโภค แบรนด์ และรัฐบาลด้วยการยืนยันแบบทันที",
            learnMore: "ดูเพิ่มเติม",
            getStarted: "เริ่มต้น",
            scanNow: "สแกนตอนนี้",
            verified: "✓ ผ่านการยืนยัน"
        },
        mission: {
            title: "พันธกิจของเรา",
            description: "พันธกิจของเราคือการปกป้องแบรนด์ชั้นนำของโลกจากการปลอมแปลง — และปกป้องผู้บริโภคจากการหลอกลวง อันตราย หรือแม้แต่การเสียชีวิตที่เกิดจากสินค้าปลอม",
            banner: "ปกป้องแบรนด์ที่ยอดเยี่ยมและช่วยชีวิตด้วยการยุติเครื่องดื่มแอลกอฮอล์ปลอมตั้งแต่ต้นทาง"
        },
        features: {
            title: "คุณสมบัติเด่น",
            tamperEvident: {
                title: "ป้องกันการงัดแงะ",
                description: "ความปลอดภัยทั้งทางกายภาพและดิจิทัลช่วยให้ตรวจจับและบันทึกการงัดแงะได้ทันที"
            },
            blockchain: {
                title: "ยืนยันด้วยบล็อกเชน",
                description: "การสแกนทุกครั้งได้รับการยืนยันผ่านเทคโนโลยีบล็อกเชนที่ไม่สามารถแก้ไขได้ เพื่อความโปร่งใสอย่างสมบูรณ์"
            },
            noApp: {
                title: "ไม่ต้องใช้แอป",
                description: "ใช้งานได้กับสมาร์ตโฟนที่รองรับ NFC ทุกเครื่อง เพียงแตะและยืนยัน — ไม่ต้องดาวน์โหลด"
            },
            globalTracking: {
                title: "การติดตามทั่วโลก",
                description: "การเฝ้าระวังแบบเรียลไทม์ช่วยตรวจจับรูปแบบที่น่าสงสัยและความพยายามฉ้อโกงในห่วงโซ่อุปทาน"
            },
            analytics: {
                title: "แดชบอร์ดการวิเคราะห์",
                description: "ข้อมูลเชิงลึกที่ครอบคลุมสำหรับแบรนด์และหน่วยงานในการติดตามการกระจายสินค้าและการปฏิบัติตามข้อกำหนด"
            },
            durability: {
                title: "ความทนทานยาวนาน",
                description: "ชิป NFC แบบพาสซีฟไม่ต้องใช้แบตเตอรี่และมีอายุการใช้งานยาวนานกว่า 10 ปี"
            }
        },
        howItWorks: {
            title: "วิธีการทำงาน",
            step1: { title: "ติดตั้งแท็ก", description: "ติดตั้งแท็ก NFC ที่โรงงานบรรจุขวดพร้อมคีย์ที่เข้ารหัสเฉพาะ" },
            step2: { title: "การสแกนของผู้บริโภค", description: "เพียงแตะสมาร์ตโฟนจะเปิดหน้าเว็บยืนยันที่ปลอดภัย" },
            step3: { title: "การยืนยันทันที", description: "การยืนยันแบบเรียลไทม์ยืนยันความแท้ของสินค้า" },
            step4: { title: "บันทึกข้อมูล", description: "ตรวจสอบการสแกนทั้งหมดเพื่อหาพฤติกรรมฉ้อโกงและแจ้งเตือน"
            }
        },
        benefits: {
            title: "ประโยชน์สำหรับทุกฝ่ายที่เกี่ยวข้อง",
            consumers: { title: "สำหรับผู้บริโภค", description: "สบายใจได้ว่าคุณกำลังบริโภคสินค้าที่ปลอดภัยและแท้จริง การยืนยันที่ปลายนิ้วของคุณ" },
            brands: { title: "สำหรับแบรนด์", description: "ปกป้องชื่อเสียง ลดความสูญเสียจากการปลอมแปลง และรับข้อมูลเชิงลึกที่มีค่าในห่วงโซ่อุปทาน" },
            governments: { title: "สำหรับรัฐบาล", description: "ต่อสู้กับการค้าที่ผิดกฎหมาย ปรับปรุงการจัดเก็บภาษี และยกระดับการคุ้มครองสาธารณสุข" },
            retailers: { title: "สำหรับผู้ค้าปลีก", description: "ตรวจสอบความสมบูรณ์ของสินค้าได้ทันทีและสร้างความเชื่อมั่นให้ลูกค้าด้วยสินค้าที่ผ่านการยืนยัน"
            }
        },
        faq: {
            metaTitle: "FACT FAQ",
            title: "FACT FAQ",
            backLink: "← กลับสู่หน้าหลัก",
            questions: {
                q1: {
                    question: "ทำไมระบบนี้ดีกว่าวิธีป้องกันแบบเดิม?",
                    answer: "โซลูชันแบบเดิมอย่างโฮโลแกรมหรือคิวอาร์โค้ดพิมพ์สามารถถูกทำซ้ำได้ง่าย แท็ก NFC มีรหัสเฉพาะและถูกเข้ารหัส — จึงไม่สามารถโคลนได้ ระบบบันทึกทุกเหตุการณ์ (การผลิต การกระจาย การเปิดซีล) เพื่อสร้างประวัติครบถ้วนและให้ AI ตรวจจับรูปแบบที่น่าสงสัยโดยอัตโนมัติ ในการตรวจสอบความแท้ ผู้ใช้ Android เข้าไปที่ www.facttag.info และผู้ใช้ iPhone ดาวน์โหลดแอปของเราที่มีขนาดเล็กและใช้งานง่าย"
                },
                q2: {
                    question: "การสแกนทำงานอย่างไร ต้องทำแบบแมนนวลทีละขวดหรือไม่?",
                    answer: "ไม่จำเป็นต้องสแกนแมนนวล กล่องสินค้ามีแท็ก RFID ที่อ่านได้ไกลถึง 10 เมตรผ่านประตูสแกนที่ติดตั้งไว้ในจุดสำคัญของห่วงโซ่อุปทาน (ออกจากโรงงาน เข้าสู่คลังของตัวแทนจำหน่าย จุดขาย) สำหรับลังที่ปิดผนึก 6 หรือ 12 ขวด เพียงผ่านประตู ระบบจะบันทึกทั้งหมดพร้อมกันผ่าน RFID การสแกนด้วยสมาร์ตโฟนก็ทำได้เมื่อจำเป็น โดยเฉพาะผู้บริโภคหรือร้านค้า"
                },
                q3: {
                    question: "ถ้ามีคนเอาฝาขวดไปใช้กับสินค้าปลอมอีกจะทำอย่างไร?",
                    answerIntro: "AI ของแพลตฟอร์มจะสร้างการแจ้งเตือนตามรูปแบบการบริโภค เช่น ปริมาณ โปรไฟล์ลูกค้า ระยะเวลาที่วางขาย เวลาเปิดซีล (หากใช้ FACT Tag Pro) และประเภทสินค้า ตัวอย่างเช่น:",
                    barExample: "บาร์/คลับ: ระบบรู้ว่าร้านแห่งนี้ได้รับวิสกี้พรีเมียม 20 ขวดต่อสัปดาห์ หากพบฝาจากล็อตที่ส่งมาสามสัปดาห์ก่อนอยู่บนขวด \"ใหม่\" ระบบจะแจ้งเตือนทันที และถ้าขวดนั้นถูกบริโภคหมดใน 2 วัน (ปกติ 5-7 วัน) คำเตือนจะเข้มข้นขึ้น",
                    supermarketExample: "ซูเปอร์มาร์เก็ต: เครือข่ายนี้รับวอดก้า 500 ขวดต่อเดือน หากฝาจากล็อตเก่าเริ่มหมุนเวียนผิดปกติ หรือเวลาระหว่างการส่งมอบกับการ \"ขาย\" ไม่สอดคล้องกับประวัติ ระบบจะตรวจจับได้ทันที",
                    distributorExample: "ผู้จัดจำหน่าย: หากฝาเดียวกันหมุนเวียนระหว่างหลายจุดขายต่อเนื่อง หรือปรากฏในพื้นที่ที่ไม่อยู่ในช่องทางจัดจำหน่ายที่ได้รับอนุญาต อัลกอริทึมจะตรวจพบความผิดปกติ",
                    analysisSummary: "ระบบจะครอสเช็กตำแหน่งทางภูมิศาสตร์ เวลาระหว่างธุรกรรม โปรไฟล์การบริโภคของสถานที่ และประวัติของล็อต เพื่อค้นหารูปแบบผิดปกติที่มนุษย์แทบมองไม่เห็น"
                },
                q4: {
                    question: "ระบบป้องกันการดัดแปลงหลังเปิดขวดได้อย่างไร?",
                    answerPrimary: "ระบบสามารถตรวจจับเวลาที่ซีลถูกเปิดและติดตามรูปแบบการบริโภค หากขวดถูกเปิด ปิดใหม่ แล้วกลับเข้าสู่ตลาดแบบผิดปกติ อัลกอริทึม AI จะระบุความเบี่ยงเบนและแจ้งผู้ผลิตหรือหน่วยงานสาธารณสุขทันที",
                    answerSecondary: "แม้จะไม่สามารถป้องกันความเสี่ยงจากการดัดแปลงในขั้นตอนการบริโภคสุดท้าย (เช่น ที่บ้าน) ได้ 100% แต่ระบบช่วยลดการปลอมปนในห่วงโซ่การกระจายขนาดใหญ่ได้อย่างมาก ซึ่งเป็นจุดที่สร้างความเสียหายรุนแรง"
                },
                q5: {
                    question: "ผู้บริโภคตรวจสอบความแท้ได้หรือไม่?",
                    answer: "ได้แน่นอน! ผู้ใช้ Android เข้า www.facttag.info และผู้ใช้ iPhone ดาวน์โหลดแอปขนาดเล็กของเรา เพียงนำสมาร์ตโฟนไปแตะที่ฝา (NFC) ระบบจะแสดงความแท้จริง วันที่ผลิต ล็อต ประวัติการเคลื่อนไหว และข้อมูลสินค้าเพิ่มเติมทันที"
                },
                q6: {
                    question: "ผลกระทบของสินค้าปลอมรุนแรงแค่ไหน?",
                    answerIntro: "อุตสาหกรรมเครื่องดื่มปลอมมีมูลค่าราว 55 พันล้านเรียลต่อปีในบราซิลเพียงประเทศเดียว ส่งผลให้:",
                    losses: "ผู้ผลิตที่ถูกต้องตามกฎหมายสูญเสียรายได้มหาศาล",
                    tax: "รัฐสูญเสียรายได้จากภาษี",
                    health: "เกิดความเสี่ยงร้ายแรงต่อสาธารณสุข: สินค้าปลอมมักมีเมทานอลและสารพิษอื่น ๆ ทำให้เกิดพิษ ตาบอด หรือเสียชีวิต",
                    brand: "ชื่อเสียงของแบรนด์ที่สั่งสมมายาวนานเสียหายอย่างไม่อาจกู้คืน",
                    answerSummary: "ต้นทุนการติดตั้งระบบต่ำมากเมื่อเทียบกับความเสียหายที่เกิดจากการปลอมแปลง"
                },
                q7: {
                    question: "ค่าใช้จ่ายในการติดตั้งเท่าไหร่?",
                    answer: "ต้นทุนแท็ก NFC ขึ้นอยู่กับปริมาณ แต่โดยทั่วไปอยู่ที่ R$0.50 ถึง R$2.00 ต่อชิ้นเมื่อผลิตในปริมาณมาก แท็ก RFID สำหรับกล่องมีราคา R$0.30 ถึง R$5.00 เมื่อเทียบกับความเสียหายประมาณ 55 พันล้านเรียล ความเสี่ยงด้านสาธารณสุข และผลกระทบต่อแบรนด์ ส่วนใหญ่จะได้ ROI เป็นบวกภายใน 6-12 เดือน"
                },
                q8: {
                    question: "ระบบนี้สมบูรณ์แบบ 100% หรือไม่?",
                    answer: "ไม่มีระบบใดสมบูรณ์แบบ 100% แต่โซลูชันนี้แข็งแกร่งกว่าวิธีอื่นในปัจจุบันมาก การผสมผสานฮาร์ดแวร์เฉพาะ (แท็ก NFC/RFID) การเข้ารหัส การติดตามแบบเรียลไทม์ และการวิเคราะห์ด้วย AI ช่วยสร้างชั้นการป้องกันหลายระดับ ทำให้การปลอมแปลงทำได้ยากและไม่คุ้มค่า"
                },
                q9: {
                    question: "ใช้งานแบบออฟไลน์ได้ไหม?",
                    answer: "ได้! การตรวจสอบความแท้ขั้นพื้นฐานทำงานแบบออฟไลน์ — คุณสามารถสแกนเพื่อยืนยันว่าแท็กของแท้ถูกติดตั้งอย่างถูกต้อง แต่หากต้องการดูประวัติการเคลื่อนไหวทั้งหมดและข้อมูลล่าสุดของห่วงโซ่อุปทาน ต้องเชื่อมต่ออินเทอร์เน็ต เมื่อกลับมาออนไลน์ ระบบจะซิงค์ข้อมูลโดยอัตโนมัติ"
                }
            }
        },
        aboutPage: {
            metaTitle: "เกี่ยวกับเรา - FACT",
            title: "เกี่ยวกับเรา",
            intro: "FACT (มูลนิธิต่อต้านการค้าสินค้าปลอม) เป็นพันธมิตรของผู้เชี่ยวชาญด้านเทคโนโลยี ผู้กำหนดนโยบาย นักสืบ และพันธมิตรแบรนด์ที่มุ่งหยุดยั้งสินค้าปลอมไม่ให้ถึงมือผู้บริโภค เราผสานข่าวกรองห่วงโซ่อุปทานสมัยใหม่เข้ากับการบังคับใช้แบบร่วมมือเพื่อสร้างความเชื่อมั่นในตลาดโลก",
            missionTitle: "พันธกิจของเรา",
            missionBody: "เราตั้งใจทำให้ความแท้เป็นความคาดหวังพื้นฐานในทุกที่ที่ผู้คนจับจ่าย โดยเชื่อมโยงแบรนด์ มาร์เก็ตเพลส และหน่วยงานกำกับดูแลเข้ากับข้อมูลเชิงลึกแบบเรียลไทม์ FACT ช่วยให้สินค้าที่ถูกต้องตามกฎหมายเคลื่อนย้ายได้อย่างราบรื่น พร้อมยุติเครือข่ายที่สนับสนุนการปลอมแปลง",
            howTitle: "วิธีการทำงานของเรา",
            howIntro: "เราดำเนินมาตรการหลายชั้นเพื่อคุ้มครองผู้บริโภคและปกป้องแบรนด์:",
            howItems: {
                intelligenceTitle: "ข่าวกรอง:",
                intelligenceBody: "เราติดตามสัญญาณในห่วงโซ่อุปทานและรายชื่อสินค้าออนไลน์เพื่อค้นหากิจกรรมที่น่าสงสัยก่อนจะลุกลาม",
                collaborationTitle: "ความร่วมมือ:",
                collaborationBody: "เราประสานผู้ผลิต ผู้ค้าปลีก และหน่วยงานบังคับใช้กฎหมายเพื่อดำเนินการอย่างรวดเร็ว",
                educationTitle: "การให้ความรู้:",
                educationBody: "เราให้เครื่องมือแก่ผู้บริโภคและทีมแนวหน้าในการสังเกตและรายงานสินค้าปลอม"
            },
            impactTitle: "ผลกระทบ",
            impactBody: "ทีมของเราช่วยให้แบรนด์ปกป้องทรัพย์สินทางปัญญา กู้คืนรายได้ที่สูญเสีย และฟื้นความเชื่อมั่นของลูกค้า ทุกการสืบสวนเสริมความแข็งแกร่งให้เครือข่ายข้อมูลร่วม สร้างผลต่อเนื่องที่กันสินค้าปลอมออกจากชั้นวางและบ้านเรือน",
            teamTitle: "ทีมของเรา",
            teamBody: "FACT รวมผู้เชี่ยวชาญด้านวิทยาการข้อมูล นโยบายสาธารณะ โลจิสติกส์ และการคุ้มครองผู้บริโภค เราร่วมมือกับองค์กรไม่แสวงหาผลกำไร สมาคมการค้า และหน่วยงานรัฐ เพื่อให้ชุมชนทั่วโลกได้ค้าขายอย่างปลอดภัยขึ้น",
            joinTitle: "ร่วมขับเคลื่อน",
            joinBody1: "การค้าสินค้าปลอมพัฒนาอย่างรวดเร็ว ดังนั้นการป้องกันของเราต้องก้าวให้เร็วยิ่งกว่า",
            joinBody2: "หากคุณเป็นเจ้าของแบรนด์ ผู้ดำเนินมาร์เก็ตเพลส หรือผู้พิทักษ์ผู้บริโภคที่ต้องการร่วมงานกับ FACT โปรดติดต่อผ่าน ",
            contactLinkLabel: "หน้าติดต่อ",
            joinBody3: " เพื่อเริ่มการสนทนา",
            backLink: "← กลับสู่หน้าหลัก"
        },
        footer: {
            title: "เข้าร่วมการต่อสู้กับการค้าสินค้าปลอม",
            subtitle: "เป็นพันธมิตรกับ FACT เพื่อสร้างมาตรฐานใหม่ที่การยืนยันความแท้ทำได้เพียงแตะครั้งเดียว",
            contactUs: "ติดต่อเราวันนี้",
            patentPrefix: "ขับเคลื่อนด้วยเทคโนโลยีการเข้ารหัสล่าสุด เลขสิทธิบัตร:",
            patentLinkLabel: "US20210391993A1",
            copyright: "© 2024 มูลนิธิต่อต้านการค้าสินค้าปลอม สร้างตลาดแอลกอฮอล์โลกที่ปลอดภัยและรับผิดชอบมากขึ้น"
        }
    }
};
