import type {TranslationLanding} from "./translation-landing.types.ts";
import type {Language} from "@/types/language.types.ts";

export const translationLanding: Record<Language, TranslationLanding> = {
    pt: {
        hero: {
            badge: "Nova Geração de Estudo Musical",
            title: "Tudo que você precisa para",
            titleHighlight: "estudar música",
            subtitle: "Afinador, metrônomo, cifras sincronizadas, player avançado e treinos guiados — pare de pular de app em app.",
            ctaPrimary: "Começar Agora",
            ctaSecondary: "Ver Demo",
            social: "Junte-se a +10.000 músicos"
        },
        mockup: {
            nowPlaying: "Tocando Agora",
            currentChord: "Acorde Atual"
        },
        features: {
            title: "Tudo em um",
            titleHighlight: "só lugar",
            subtitle: "Substitua 5 aplicativos por uma experiência integrada.",
            f1: {
                t: "Afinador Pro",
                d: "Precisão cirúrgica para qualquer instrumento. Modos Palco (silencioso) e Estúdio."
            },
            f2: {t: "Metrônomo Smart", d: "Tap tempo, subdivisões complexas e presets salvos por estilo musical."},
            f3: {t: "Cifras Sync", d: "A cifra rola sozinha enquanto a música toca. Importe qualquer áudio ou link."},
            f4: {t: "Player Avançado", d: "Slow down sem mudar o tom, Transpose e Loop A-B para tirar solos difíceis."},
            f5: {
                t: "Treino de Ouvido",
                d: "Desenvolva sua percepção com exercícios de intervalos e acordes gamificados."
            },
            f6: {t: "Treinos Diários", d: "Rotinas de 5 a 15 minutos guiadas para manter sua evolução constante."}
        },
        testimonials: {
            title: "Quem usa,",
            titleHighlight: "aprova",
            subtitle: "Histórias reais de músicos que transformaram sua rotina de estudos.",
            items: [
                {
                    name: "Ricardo M.",
                    role: "Guitarrista",
                    comment: "O Sync Chords mudou meu jeito de tirar música. Não preciso mais pausar o vídeo a cada 5 segundos.",
                    stars: 5
                },
                {
                    name: "Beatriz S.",
                    role: "Estudante de Piano",
                    comment: "O treino de ouvido é viciante. Finalmente consegui entender os intervalos de quarta e quinta!",
                    stars: 5
                },
                {
                    name: "Lucas Ferro",
                    role: "Produtor",
                    comment: "Ferramenta essencial para o dia a dia. O afinador é muito estável mesmo em ambientes barulhentos.",
                    stars: 4
                },
                {
                    name: "Mariana T.",
                    role: "Ukulele",
                    comment: "Design lindo e muito intuitivo. Uso todos os dias nos meus 15 minutos de prática.",
                    stars: 5
                }
            ]
        },
        footer: {
            description: "A plataforma definitiva para músicos que buscam excelência no estudo diário. Do iniciante ao profissional.",
            product: "Produto",
            company: "Empresa",
            support: "Suporte",
            newsletter: "Newsletter",
            newsletterDesc: "Receba dicas de estudo e novidades.",
            placeholder: "Seu melhor e-mail",
            rights: "Todos os direitos reservados.",
            links: {
                features: "Funcionalidades",
                pricing: "Planos",
                download: "Download App",
                about: "Sobre Nós",
                careers: "Carreiras",
                blog: "Blog Musical",
                help: "Central de Ajuda",
                terms: "Termos de Uso",
                privacy: "Privacidade"
            }
        },
        pricing: {
            title: "Investimento na sua",
            titleHighlight: "Evolução",
            monthly: "Mensal",
            annual: "Anual",
            off: "-20% OFF",
            subscriptionPlan: [{
                id: 1,
                category: "Mensal",
                subscribe: "Assinar Mensal",
                priceMonthly: "R$ 29,90",
                billedAnnually: "Cobrado anualmente (R$ 358,80)",
                observation: "Flexibilidade total. Cancele quando quiser.",
                inclusions: [
                    {
                        id: 1,
                        included: "Acesso a todas as ferramentas",
                    },
                    {
                        id: 2,
                        included: "Treinos diários ilimitados",
                    },
                    {
                        id: 3,
                        included: "App Mobile e Web",
                    }
                ]
            },
                {
                    id: 2,
                    category: "Anual",
                    subscribe: "Começar Teste Grátis",
                    priceMonthly: "R$ 24,90",
                    observation: "Foco total. Para quem leva música a sério.",
                    billedAnnually: "Cobrado anualmente (R$ 298,80)",
                    mostPopular: "MAIS POPULAR",
                    inclusions: [
                        {
                            id: 1,
                            included: "Tudo do plano mensal",
                        },
                        {
                            id: 2,
                            included: "Downloads de PDF Ilimitados",
                        },
                        {
                            id: 3,
                            included: "Acesso antecipado a novas features",
                        }
                    ]
                }
            ]
        },
        faq: {
            title: "Dúvidas Frequentes",
            questions: [
                {
                    id: 1,
                    question: "Funciona no celular e no computador?",
                    answer: "Sim! Sua assinatura é única. Você pode começar o treino no computador e terminar no celular. O layout se adapta perfeitamente.",
                },
                {
                    id: 2,
                    question: "As cifras acompanham qualquer música?",
                    answer: "Nossa IA analisa músicas populares com 95% de precisão. Você pode importar arquivos MP3 ou colar links do YouTube.",
                },
                {
                    id: 3,
                    question: "Posso cancelar quando quiser?",
                    answer: "Sem contratos complicados. Você pode cancelar sua assinatura a qualquer momento direto pelo painel do usuário.",
                },
                {
                    id: 4,
                    question: "Serve para quais instrumentos?",
                    answer: "Afinador e Metrônomo são universais. As cifras mostram acordes para Violão, Guitarra, Teclado e Ukulele."
                }
            ]
        }
    },
    en: {
        hero: {
            badge: "New Generation of Musical Study",
            title: "Everything you need to",
            titleHighlight: "study music",
            subtitle: "Tuner, metronome, synced chords, advanced player and guided workouts — stop jumping from app to app.",
            ctaPrimary: "Get Started",
            ctaSecondary: "Watch Demo",
            social: "Join +10,000 musicians"
        },
        mockup: {
            nowPlaying: "Now Playing",
            currentChord: "Current Chord"
        },
        features: {
            title: "All in one",
            titleHighlight: "place",
            subtitle: "Replace 5 apps with one integrated experience.",
            f1: {t: "Pro Tuner", d: "Surgical precision for any instrument. Stage (silent) and Studio modes."},
            f2: {t: "Smart Metronome", d: "Tap tempo, complex subdivisions and saved presets by musical style."},
            f3: {t: "Sync Chords", d: "Chords scroll automatically as the music plays. Import any audio or link."},
            f4: {
                t: "Advanced Player",
                d: "Slow down without changing pitch, Transpose and A-B Loop for difficult solos."
            },
            f5: {t: "Ear Training", d: "Develop your perception with gamified interval and chord exercises."},
            f6: {t: "Daily Workouts", d: "Guided 5 to 15 minute routines to keep your evolution constant."}
        },
        testimonials: {
            title: "User",
            titleHighlight: "Reviews",
            subtitle: "Real stories from musicians who transformed their study routine.",
            items: [
                {
                    name: "Richard M.",
                    role: "Guitarist",
                    comment: "Sync Chords changed the way I learn songs. I don't have to pause the video every 5 seconds anymore.",
                    stars: 5
                },
                {
                    name: "Beatrix S.",
                    role: "Piano Student",
                    comment: "The ear training is addictive. I finally understood 4th and 5th intervals!",
                    stars: 5
                },
                {
                    name: "Luke Iron",
                    role: "Producer",
                    comment: "Essential tool for daily life. The tuner is very stable even in noisy environments.",
                    stars: 4
                },
                {
                    name: "Marian T.",
                    role: "Ukulele",
                    comment: "Beautiful design and very intuitive. I use it every day in my 15-minute practice.",
                    stars: 5
                }
            ]
        },
        footer: {
            description: "The ultimate platform for musicians seeking excellence in daily practice. From beginner to pro.",
            product: "Product",
            company: "Company",
            support: "Support",
            newsletter: "Newsletter",
            newsletterDesc: "Get practice tips and updates.",
            placeholder: "Your best email",
            rights: "All rights reserved.",
            links: {
                features: "Features",
                pricing: "Pricing",
                download: "Download App",
                about: "About Us",
                careers: "Careers",
                blog: "Music Blog",
                help: "Help Center",
                terms: "Terms of Use",
                privacy: "Privacy"
            }
        },
        pricing: {
            title: "Investment in your",
            titleHighlight: "Evolution",
            monthly: "Monthly",
            annual: "Annual",
            off: "-20% OFF",
            subscriptionPlan: [{
                id: 1,
                category: "Monthly",
                subscribe: "Subscribe Monthly",
                priceMonthly: "$9.90",
                observation: "Total flexibility. Cancel anytime.",
                billedAnnually: "Billed annually ($118.80/yr)",
                inclusions: [
                    {
                        id: 1,
                        included: "Access to all tools",
                    },
                    {
                        id: 2,
                        included: "Unlimited daily workouts",
                    },
                    {
                        id: 3,
                        included: "Mobile and Web App",
                    }
                ]
            },
                {
                    id: 2,
                    category: "Annual",
                    subscribe: "Start Free Trial",
                    priceMonthly: "$7.90",
                    observation: "Total focus. For those who take music seriously.",
                    billedAnnually: "Billed annually ($94.80/yr)",
                    mostPopular: "MOST POPULAR",
                    inclusions: [
                        {
                            id: 1,
                            included: "Everything in Monthly",
                        },
                        {
                            id: 2,
                            included: "Unlimited PDF Downloads",
                        },
                        {
                            id: 3,
                            included: "Early access to new features",
                        }
                    ]
                }
            ]
        },
        faq: {
            title: "Frequently Asked Questions",
            questions: [
                {
                    id: 1,
                    question: "Does it work on mobile and desktop?",
                    answer: "Yes! Your subscription is unique. You can start training on your computer and finish on your phone. The layout adapts perfectly.",
                },
                {
                    id: 2,
                    question: "Do chords sync with any song?",
                    answer: "Our AI analyzes popular songs with 95% accuracy. You can import MP3 files or paste YouTube links.",
                },
                {
                    id: 3,
                    question: "Can I cancel anytime?",
                    answer: "No complicated contracts. You can cancel your subscription at any time directly through the user panel.",
                },
                {
                    id: 4,
                    question: "Which instruments is it for?",
                    answer: "Tuner and Metronome are universal. Chords show fingerings for Guitar, Bass, Keyboard, and Ukulele."
                }
            ]
        }
    }
};