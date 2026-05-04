<template>
  <div class="home-page">
    <!-- Decoración de Fondo (Doble Esquina) -->
    <div class="bg-decoration">
      <!-- Grupo Superior Izquierda (Original) -->
      <span class="dot dc" style="left:2%;top:5%;animation-duration:15s;animation-delay:0s"></span>
      <span class="dot rs" style="left:5%;top:10%;animation-duration:18s;animation-delay:-2s"></span>
      <span class="dot pk" style="left:10%;top:15%;animation-duration:22s;animation-delay:-4s"></span>
      <span class="dot cr" style="left:15%;top:20%;animation-duration:14s;animation-delay:-6s"></span>
      <span class="dot rs" style="left:3%;top:25%;animation-duration:20s;animation-delay:-8s"></span>
      <span class="dot pk" style="left:12%;top:30%;animation-duration:17s;animation-delay:-1s"></span>
      <span class="dot dc" style="left:20%;top:8%;animation-duration:19s;animation-delay:-3s"></span>
      <span class="dot cr" style="left:8%;top:35%;animation-duration:16s;animation-delay:-5s"></span>
      <span class="dot rs" style="left:18%;top:4%;animation-duration:21s;animation-delay:-7s"></span>
      <span class="dot dc" style="left:25%;top:12%;animation-duration:20s;animation-delay:-9s"></span>

      <!-- Grupo Inferior Derecha (Nuevo - Más pequeño) -->
      <span class="dot br rs" style="right:2%;bottom:5%;animation-duration:14s;animation-delay:0s"></span>
      <span class="dot br pk" style="right:6%;bottom:8%;animation-duration:16s;animation-delay:-3s"></span>
      <span class="dot br dc" style="right:10%;bottom:3%;animation-duration:18s;animation-delay:-1s"></span>
      <span class="dot br cr" style="right:15%;bottom:12%;animation-duration:15s;animation-delay:-5s"></span>
      <span class="dot br rs" style="right:4%;bottom:20%;animation-duration:19s;animation-delay:-2s"></span>
      <span class="dot br pk" style="right:12%;bottom:15%;animation-duration:17s;animation-delay:-7s"></span>
      <span class="dot br dc" style="right:20%;bottom:10%;animation-duration:20s;animation-delay:-4s"></span>
    </div>
    <!-- Primera fila: Hero y Categorías -->
    <div class="top-row">
      <!-- Hero Section -->
      <section id="hero-container" class="hero-section">
        <div class="hero-content container">
          <div class="hero-layout">
            <!-- Logo de Sufi a la izquierda -->

            <!-- Contenido textual a la derecha -->
            <div class="hero-text-content">
              <h1 class="hero-title">
                Encuentra tu 
                <span class="animated-api">
                  API
                  <span class="api-ghost">API</span>
                </span> 
                perfecta con 
                <span class="animated-brand">
                  <span class="brand-part-1">API Tinder</span><span class="brand-part-2"> Sufi</span>
                </span>
              </h1>
              <p class="hero-subtitle" style="color: var(--sufi-primary); font-weight: bold;">
                Su contexto funcional esta relacionado con el negocio de Sufi, con el fin de exponer las capacidades de sus diferentes productos; Movilidad, Consumo, Educación y Seguros.
              </p>

              <!-- Categories Section -->
              <section id="categories-container" class="categories-section">
                <div class="container">
                  <h2 class="section-title">Explora Nuestras Categorías</h2>
                  <p class="section-subtitle">Descubre las diferentes categorías de APIs que tenemos disponibles para ti</p>
                  <div class="carousel-controls mobile-hidden">
                    <button class="carousel-btn prev-btn" @click="shiftCarousel('right')" title="Mover a la izquierda">&larr;</button>
                    <button class="carousel-btn next-btn" @click="shiftCarousel('left')" title="Mover a la derecha">&rarr;</button>
                  </div>
                  <div class="carousel-container">
                    <div id="carousel-track" class="carousel-track" :class="{ 'is-paused': manualControlActive }">
                      <div class="category-card carousel-item consulta" 
                           :class="{ 'is-clicking': animatingCategory === 'Consulta' }"
                           @click="navigateToCategory('Consulta', 0, $event)">
                        <div class="category-card-inner">
                          <div v-if="animatingCategory === 'Consulta'" class="click-flames-burst">
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                          </div>
                          <div class="popular-badge">
                            <span class="p-heart">❤️</span>
                            <div class="p-flames">
                              <span class="p-flame">🔥</span><span class="p-flame">🔥</span><span class="p-flame">🔥</span>
                            </div>
                          </div>
                          <div class="category-icon">🔍</div>
                          <h3 class="category-title">Consulta</h3>
                          <p class="category-description">APIs para consultar información de clientes, créditos y transacciones</p>
                        </div>
                      </div>
                      <div class="category-card carousel-item gestion" 
                           :class="{ 'is-clicking': animatingCategory === 'Gestion' }"
                           @click="navigateToCategory('Gestion', 1, $event)">
                        <div class="category-card-inner">
                          <div v-if="animatingCategory === 'Gestion'" class="click-flames-burst">
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                          </div>
                          <div class="popular-badge">
                            <span class="p-heart">❤️</span>
                            <div class="p-flames">
                              <span class="p-flame">🔥</span><span class="p-flame">🔥</span><span class="p-flame">🔥</span>
                            </div>
                          </div>
                          <div class="category-icon">⚙️</div>
                          <h3 class="category-title">Gestión</h3>
                          <p class="category-description">APIs para gestionar datos, estudios y procesos crediticios</p>
                        </div>
                      </div>
                      <div class="category-card carousel-item simulacion" 
                           :class="{ 'is-clicking': animatingCategory === 'Simulacion' }"
                           @click="navigateToCategory('Simulacion', 2, $event)">
                        <div class="category-card-inner">
                          <div v-if="animatingCategory === 'Simulacion'" class="click-flames-burst">
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                          </div>
                          <div class="category-icon">📊</div>
                          <h3 class="category-title">Simulación</h3>
                          <p class="category-description">APIs para simular créditos y cotizar seguros</p>
                        </div>
                      </div>
                      <div class="category-card carousel-item desembolso" 
                           :class="{ 'is-clicking': animatingCategory === 'Desembolso' }"
                           @click="navigateToCategory('Desembolso', 3, $event)">
                        <div class="category-card-inner">
                          <div v-if="animatingCategory === 'Desembolso'" class="click-flames-burst">
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                          </div>
                          <div class="popular-badge">
                            <span class="p-heart">❤️</span>
                            <div class="p-flames">
                              <span class="p-flame">🔥</span><span class="p-flame">🔥</span><span class="p-flame">🔥</span>
                            </div>
                          </div>
                          <div class="category-icon">💰</div>
                          <h3 class="category-title">Desembolso</h3>
                          <p class="category-description">APIs para realizar desembolsos de créditos</p>
                        </div>
                      </div>
                      <div class="category-card carousel-item enrolamiento" 
                           :class="{ 'is-clicking': animatingCategory === 'Enrolamiento' }"
                           @click="navigateToCategory('Enrolamiento', 4, $event)">
                        <div class="category-card-inner">
                          <div v-if="animatingCategory === 'Enrolamiento'" class="click-flames-burst">
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                          </div>
                          <div class="category-icon">✅</div>
                          <h3 class="category-title">Enrolamiento</h3>
                          <p class="category-description">APIs para enrolamiento y registro de usuarios</p>
                        </div>
                      </div>
                      <div class="category-card carousel-item registrar" 
                           :class="{ 'is-clicking': animatingCategory === 'Registrar' }"
                           @click="navigateToCategory('Registrar', 5, $event)">
                        <div class="category-card-inner">
                          <div v-if="animatingCategory === 'Registrar'" class="click-flames-burst">
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                            <span class="burst-flame">🔥</span><span class="burst-flame">🔥</span><span class="burst-flame">🔥</span>
                          </div>
                          <div class="category-icon">📝</div>
                          <h3 class="category-title">Registrar</h3>
                          <p class="category-description">APIs para registrar y gestionar obligaciones</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            <!-- END OF HERO TEXT CONTENT -->
          </div>
        </div>
        
        <div class="cta-container">
          <button id="cta-button" @click="navigateToApis" class="cta-button">
            <span>Comenzar Ahora</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </section>
    </div>

    <!-- Segunda fila: Horizontal Info Container -->
    <div class="horizontal-info-container">
      <!-- Stats Section -->
      <section id="stats-container" class="stats-section">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number apis-count"></div>
              <div class="stat-label">APIs Disponibles</div>
            </div>
            <div class="stat-card">
              <div class="stat-number cats-count"></div>
              <div class="stat-label">Categorías</div>
            </div>
          </div>
        </div>
      </section>



      <!-- How it Works Section -->
      <section id="how-it-works-container" class="how-it-works-section">
        <div class="container">
          <h2 class="section-title">¿Cómo funciona?</h2>
          <div class="steps-grid">
            <div class="step-card">
              <div class="step-number">1</div>
              <h3>Explora</h3>
              <p>Navega por nuestro catálogo de APIs organizadas por categorías</p>
            </div>
            <div class="step-card">
              <div class="step-number">2</div>
              <h3>Filtra</h3>
              <p>Usa filtros inteligentes para encontrar la API que necesitas</p>
            </div>
            <div class="step-card">
              <div class="step-number">3</div>
              <h3>Conecta</h3>
              <p>Realiza match y accede a la documentación completa</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Decorative Divider (Fuera del contenedor horizontal) -->
    <div id="divider-container" class="decorative-divider">
      <div class="divider-line"></div>
      <div class="divider-icon-container">
        <img src="@/assets/icons/sufi.png" alt="Sufi" class="divider-icon">
      </div>
      <div class="divider-line"></div>
    </div>

    <!-- Description Section - Full Width at the End -->
    <section id="description-container" class="description-section">
      <div class="container">
        <p class="hero-description">
          Desde la estrategia productor consumidor de Sufi, se implementan las capacidades que suplen las necesidades estratégicas del negocio, permitiendo a sus consumidores originar y gestionar el producto crediticio. Adicional ofrecer funcionalidades de autogestión y consulta para los aliados.
        </p>
      </div>
    </section>
    <!-- Floating Widget & Chat SUFIA (Rediseñado) -->
    <div class="sufia-widget-container" :class="{ 'is-open': isChatOpen }">
      <!-- Collapsed State (Iconic Circular Design) -->
      <div v-if="!isChatOpen" class="floating-widget-sufia-new" @click="toggleChat">
        <div class="robot-icon-circle">
          <svg class="robot-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Sleek Helmet Shape -->
            <path d="M12 2C6.48 2 2 6.48 2 12C2 14.59 3 16.94 4.65 18.7L6 17.35C4.75 15.9 4 14.04 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 14.04 19.25 15.9 18 17.35L19.35 18.7C21 16.94 22 14.59 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
            <!-- Inner Helmet Core -->
            <path d="M12 5C8.13 5 5 8.13 5 12V15C5 16.66 6.34 18 8 18H16C17.66 18 19 16.66 19 15V12C19 8.13 15.87 5 12 5Z" fill="currentColor" opacity="0.8"/>
            <!-- Large Digital Visor -->
            <rect x="6" y="9" width="12" height="4" rx="2" fill="#000"/>
            <!-- Visor Data Glow -->
            <path d="M7 11H17" stroke="#dc3545" stroke-width="2" stroke-linecap="round">
              <animate attributeName="opacity" values="1;0.2;1" dur="0.8s" repeatCount="indefinite" />
            </path>
            <!-- Visor Hexagon Accents -->
            <path d="M9 10L10 11L9 12M15 10L14 11L15 12" stroke="#dc3545" stroke-width="0.5" opacity="0.5"/>
            <!-- Lower Vent Details -->
            <path d="M10 16H14M11 17H13" stroke="white" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
          </svg>
        </div>
        <div class="widget-label-new">Pregúntale a SUFIA</div>
        <div class="widget-pulse-new"></div>
      </div>

      <!-- Expanded State (Chat) -->
      <div v-else class="sufia-chat-window">
        <div class="chat-header">
          <div class="header-info">
            <div class="avatar-small">
              <svg viewBox="0 0 24 24" fill="none" style="width: 80%; height: 80%; color: #dc3545">
                <path d="M12 2C7.58 2 4 5.58 4 10V14C4 16.21 5.79 18 8 18H16C18.21 18 20 16.21 20 14V10C20 5.58 16.42 2 12 2Z" fill="currentColor"/>
                <circle cx="9" cy="10" r="1.5" fill="white"/>
                <circle cx="15" cy="10" r="1.5" fill="white"/>
              </svg>
            </div>
            <div>
              <h3>SUFIA</h3>
              <p>Asistente Virtual Sufi</p>
            </div>
          </div>
          <button class="close-chat" @click="toggleChat">&times;</button>
        </div>
        
        <div class="chat-messages" ref="chatContainer">
          <!-- Mensaje Inicial con Grid -->
          <div class="message sufi-msg">
            ¡Hola! Soy SUFIA, tu asistente virtual. ¿En qué puedo ayudarte hoy? ¿Quieres explorar los casos de uso que tengo disponibles para ti? Míralos:
            <div class="use-cases-grid">
              <div v-for="uc in useCases" :key="uc.id" class="use-case-card" @click="selectUseCase(uc)">
                <span class="uc-icon">{{ uc.icon }}</span>
                <span class="uc-name">Caso {{ uc.id }}: {{ uc.name }}</span>
              </div>
            </div>
          </div>
          
          <div v-for="msg in messages" :key="msg.id" :class="['message', msg.sender + '-msg', { 'thinking': msg.isThinking }]">
            <template v-if="msg.isThinking">
              <div class="typing-loader">
                <span></span><span></span><span></span>
              </div>
            </template>
            <template v-else>
              {{ msg.text }}
              
              <!-- Grid dinámico si el mensaje lo requiere -->
              <div v-if="msg.showGrid" class="use-cases-grid">
                <div v-for="uc in useCases" :key="uc.id" class="use-case-card" @click="selectUseCase(uc)">
                  <span class="uc-icon">{{ uc.icon }}</span>
                  <span class="uc-name">Caso {{ uc.id }}: {{ uc.name }}</span>
                </div>
              </div>

              <div v-if="msg.apis && msg.apis.length" class="api-list">
                <div 
                  v-for="api in msg.apis" 
                  :key="api" 
                  class="api-item clickable" 
                  @click="handleApiClick(api)"
                  title="Hacer match con esta API"
                >
                  <span>🚀</span> {{ api }}
                </div>
              </div>
            </template>
          </div>
        </div>


        <div class="chat-footer selection-only">
          <!-- Burbuja Flotante de Casos (Condicional: Solo tras mostrar APIs) -->
          <div v-if="showExploreMore" class="explore-other-cases-bubble" @click="exploreMore">
            ¿ Explorar otros casos ?
          </div>

          <div class="chat-actions centered">
            <button v-if="!isChatFinished" class="finish-btn large" @click="finishChat">
              Finalizar Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  props: {
    apis: { type: Array, default: () => [] }
  },
  data() {
    return {
      animatingCategory: null,
      manualControlActive: false,
      resumeTimer: null,
      targetShift: 0,
      currentShift: 0,
      isLerping: false,
      shiftRAF: null,
      isChatOpen: false,
      isChatFinished: false,
      messages: [],
      userInput: '',
      useCases: [
        { id: 1, name: 'Obligaciones', icon: '📄' },
        { id: 2, name: 'Audio Sufi', icon: '🎧' },
        { id: 3, name: 'Efecty', icon: '💰' },
        { id: 4, name: 'Audio Sufi y Obligaciones', icon: '🎙️' },
        { id: 5, name: 'Información de Cliente', icon: '👤' },
        { id: 6, name: 'Simulación', icon: '📊' },
        { id: 7, name: 'Tu 360', icon: '🌐' },
        { id: 8, name: 'Consumo', icon: '🛍️' },
        { id: 9, name: 'Autenticación Liviana', icon: '🔐' },
        { id: 10, name: 'Botón Recaudo', icon: '🖱️' },
        { id: 11, name: 'Auto Gestión', icon: '⚙️' },
        { id: 12, name: 'Comercios Aliados', icon: '🤝' },
        { id: 13, name: 'Gestionar mi Crédito', icon: '💳' }
      ],
      showExploreMore: false
    }
  },
  watch: {
    messages: {
      deep: true,
      handler(newVal) {
        // Filtrar mensajes de "pensando" antes de guardar
        const toSave = newVal.filter(m => !m.isThinking);
        localStorage.setItem('sufiaMessages', JSON.stringify(toSave));
      }
    },
    isChatOpen(newVal) {
      localStorage.setItem('sufiaChatOpen', newVal);
    },
    showExploreMore(newVal) {
      localStorage.setItem('sufiaShowExploreMore', newVal);
    }
  },
  mounted() {
    const savedPos = localStorage.getItem('carouselPos');
    if (savedPos) {
      this.$nextTick(() => {
        setTimeout(() => {
          const cards = this.$el.querySelectorAll('.carousel-item');
          if (cards.length === 0) return;
          
          const duration = 15000;
          const targetTime = parseFloat(savedPos);
          
          // Buscamos la animación maestra en la primera tarjeta para calcular el delta
          const firstCardAnims = cards[0].getAnimations({ subtree: true });
          const mainAnim = firstCardAnims.find(a => a.animationName && a.animationName.includes('slide-cover-flow'));
          
          if (mainAnim) {
            const currentTime = mainAnim.currentTime || 0;
            const delta = targetTime - currentTime;
            
            // Sincronizamos ABSOLUTAMENTE TODAS las animaciones del carrusel (incluyendo hijos y pseudo-elementos)
            const allCarouselAnims = this.$el.querySelectorAll('.carousel-track *');
            allCarouselAnims.forEach(el => {
              el.getAnimations({ subtree: true }).forEach(anim => {
                let newTime = (anim.currentTime || 0) + delta;
                anim.currentTime = ((newTime % duration) + duration) % duration;
              });
            });
            
            // También las animaciones directas de las tarjetas
            cards.forEach(card => {
              card.getAnimations().forEach(anim => {
                let newTime = (anim.currentTime || 0) + delta;
                anim.currentTime = ((newTime % duration) + duration) % duration;
              });
            });
          }
        }, 100); 
      });
    }

    // Restaurar estado del Chat de SUFIA SOLO si volvemos de un Match
    const isReturning = localStorage.getItem('isReturningFromMatch');
    
    if (isReturning === 'true') {
      const savedMessages = localStorage.getItem('sufiaMessages');
      if (savedMessages) {
        try {
          this.messages = JSON.parse(savedMessages);
          this.$nextTick(this.scrollToBottom);
        } catch (e) {
          console.error("Error cargando mensajes de SUFIA:", e);
        }
      }
      const savedChatOpen = localStorage.getItem('sufiaChatOpen');
      if (savedChatOpen === 'true') {
        this.isChatOpen = true;
        this.$nextTick(this.scrollToBottom);
      }
      const savedExploreMore = localStorage.getItem('sufiaShowExploreMore');
      if (savedExploreMore === 'true') {
        this.showExploreMore = true;
      }
      // Limpiar bandera para que el próximo refresh sea limpio
      localStorage.removeItem('isReturningFromMatch');
    } else {
      // Si no estamos volviendo, limpiamos la memoria del chat para iniciar frescos
      localStorage.removeItem('sufiaMessages');
      localStorage.removeItem('sufiaChatOpen');
      localStorage.removeItem('sufiaShowExploreMore');
    }
  },
  methods: {
    navigateToApis() {
      this.$emit('navigate-to-apis');
    },
    navigateToCategory(category, index) {
      if (this.animatingCategory) return;
      
      this.animatingCategory = category;
      
      // Persistencia Inteligente: Guardar el tiempo que centra ESTA tarjeta
      const centerTime = index * 2500;
      localStorage.setItem('carouselPos', centerTime);

      setTimeout(() => {
        this.$emit('navigate-to-apis', category);
        this.animatingCategory = null;
      }, 1700);
    },
    async sendMessage() {
      if (!this.userInput.trim() || this.isChatFinished) return;
      
      this.showExploreMore = false; // Ocultar burbuja al iniciar nueva consulta

      
      const userMessageText = this.userInput;
      const userMessageId = Date.now();
      
      // 1. Agregar mensaje del usuario al chat
      this.messages.push({ 
        id: userMessageId, 
        text: userMessageText, 
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      
      this.userInput = '';
      this.$nextTick(this.scrollToBottom);

      // 2. Mostrar indicador de carga
      const thinkingId = Date.now() + 1;
      this.messages.push({
        id: thinkingId,
        text: "...",
        sender: 'sufia',
        isThinking: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      this.$nextTick(this.scrollToBottom);

      try {
        // 3. Petición DIRECTA a la IP y Puerto (Sin puentes ni proxies)
        const apiUrl = `https://23.20.11.88:8091/api/rag/mcp?message=${encodeURIComponent(userMessageText)}`;
        
        const response = await fetch(apiUrl, {
          method: 'GET'
        });

        this.messages = this.messages.filter(m => m.id !== thinkingId);

        if (!response.ok) throw new Error(`Error en el servicio: ${response.status}`);

        const apiResponse = await response.text(); // Recibimos el texto directamente del servidor
        
        this.handleSufiaResponse(apiResponse);
      } catch (error) {
        console.error("Error API Sufia:", error);
        this.messages = this.messages.filter(m => m.id !== thinkingId);
        this.messages.push({
          id: Date.now(),
          text: `⚠️ No pude conectar con SUFIA: ${error.message}. Verifica que el servicio esté activo.`,
          sender: 'sufia',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
      }
      
      this.$nextTick(this.scrollToBottom);
    },
    handleSufiaResponse(apiResponse) {
      let text = apiResponse;
      let detectedApis = [];
      const lines = apiResponse.split('\n').map(l => l.trim()).filter(l => l.length > 3);

      lines.forEach(line => {
        const cleanLine = line.replace('API:', '').trim();
        const lowerLine = cleanLine.toLowerCase();

        const isMatch = this.apis.some(a => {
          const apiName = (a.nombreApi || '').toLowerCase();
          const prodName = (a.nombreEspanol || '').replace(/_/g, ' ').toLowerCase();
          const keywords = (a.palabrasClave || '').toLowerCase();
          return lowerLine.includes(apiName) || 
                 apiName.includes(lowerLine) ||
                 (lowerLine.includes(prodName) && lowerLine.includes(apiName.split(' ')[0])) ||
                 keywords.split(',').some(kw => kw.trim().length > 3 && lowerLine.includes(kw.trim().toLowerCase()));
        });

        if (isMatch || line.startsWith('API:')) {
          detectedApis.push(cleanLine);
        }
      });

      if (detectedApis.length > 0) {
        const firstLine = lines[0];
        const isFirstLineApi = detectedApis.some(api => firstLine.includes(api));
        text = isFirstLineApi ? "He encontrado las siguientes capacidades para tu requerimiento:" : firstLine;
      }

      this.messages.push({
        id: Date.now(),
        text: text,
        apis: detectedApis,
        sender: 'sufia',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      this.$nextTick(this.scrollToBottom);

      if (detectedApis.length > 0) {
        setTimeout(() => { this.showExploreMore = true; }, 1000);
      }
    },
    exploreMore() {
      this.showExploreMore = false;
      this.messages.push({
        id: Date.now(),
        text: "Claro! Sigue explorando nuestros casos disponibles...",
        sender: 'sufia',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      
      setTimeout(() => {
        this.messages.push({
          id: Date.now() + 1,
          text: "Míralos:",
          sender: 'sufia',
          showGrid: true,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        this.$nextTick(this.scrollToBottom);
      }, 600);
    },
    handleApiClick(apiName) {
      if (this.isChatFinished) return;

      const fullText = apiName;
      let extracted = "";
      const dashIndex = fullText.includes('–') ? fullText.indexOf('–') : fullText.indexOf('-');
      const parenIndex = fullText.indexOf('(');

      if (dashIndex !== -1) {
        extracted = parenIndex !== -1 && parenIndex > dashIndex 
          ? fullText.substring(dashIndex + 1, parenIndex) 
          : fullText.substring(dashIndex + 1);
      } else {
        extracted = parenIndex !== -1 ? fullText.substring(0, parenIndex) : fullText;
      }

      const processedValue = extracted.trim().toLowerCase();
      let filterName = processedValue;

      // Intentar encontrar el x-ibm-name técnico en el dataset para mayor precisión
      const matchedApi = this.apis.find(a => {
        const apiNameDS = (a.nombreApi || '').toLowerCase();
        return apiNameDS.includes(processedValue) || processedValue.includes(apiNameDS);
      });

      if (matchedApi && matchedApi.xIbmName) {
        filterName = matchedApi.xIbmName;
      }

      this.messages.push({
        id: Date.now(),
        text: "Buena elección!! espero hagas match 😉",
        sender: 'sufia',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      this.$nextTick(this.scrollToBottom);
      
      // Activar bandera de persistencia para el chat al volver
      localStorage.setItem('isReturningFromMatch', 'true');

      setTimeout(() => {
        this.toggleChat();
        this.$emit('navigate-to-apis', filterName, true);
      }, 1500);
    },
    finishChat() {
      this.isChatFinished = true;
      this.messages.push({
        id: Date.now(),
        text: "Fué un gusto ayudarte, ya puedes cerrar este chat pero aquí estaré para tí!",
        sender: 'sufia',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      this.$nextTick(this.scrollToBottom);
    },
    toggleChat() {
      this.isChatOpen = !this.isChatOpen;
      // Ya no reseteamos los mensajes al cerrar para mantener la persistencia
      if (!this.isChatOpen) {
        this.isChatFinished = false;
      }
    },
    selectUseCase(uc) {
      if (this.isChatFinished) return;
      this.userInput = `Caso ${uc.id} : ${uc.name}`;
      this.sendMessage();
    },
    scrollToBottom() {
      const container = this.$refs.chatContainer;
      if (container) container.scrollTop = container.scrollHeight;
    },
    shiftCarousel(direction) {
      const shiftAmountMs = direction === 'right' ? -2500 : 2500;
      this.targetShift += shiftAmountMs;
      this.manualControlActive = true;
      if (this.resumeTimer) clearTimeout(this.resumeTimer);
      if (!this.isLerping) {
        this.isLerping = true;
        const loop = () => {
          let diff = this.targetShift - this.currentShift;
          if (Math.abs(diff) < 1) {
            this.applyDeltaToAnimations(diff);
            this.currentShift = this.targetShift;
            this.isLerping = false;
            this.resumeTimer = setTimeout(() => {
              this.manualControlActive = false;
            }, 4000);
            return;
          }
          const step = diff * 0.08;
          this.currentShift += step;
          this.applyDeltaToAnimations(step);
          this.shiftRAF = requestAnimationFrame(loop);
        };
        this.shiftRAF = requestAnimationFrame(loop);
      }
    },
    applyDeltaToAnimations(deltaMs) {
      const cards = this.$el.querySelectorAll('.carousel-item');
      const duration = 15000; // Duración total de la animación en ms
      cards.forEach(card => {
        const anims = card.getAnimations();
        anims.forEach(anim => {
          if (anim.animationName && (anim.animationName.includes('slide-cover-flow') || anim.animationName.includes('active-state'))) {
            let newTime = (anim.currentTime || 0) + deltaMs;
            // Asegurar que el tiempo sea siempre positivo y cíclico dentro de la duración
            newTime = ((newTime % duration) + duration) % duration;
            anim.currentTime = newTime;
          }
        });
      });
    },

  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: #fff;
  color: #1F1E23;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero Section */
.hero-section {
  position: relative;
  background: transparent;
  padding: 60px 24px 0 24px;
  overflow: hidden;
}

/* Contenedor de logos flotantes */
.floating-logos-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.floating-logo {
  position: absolute;
  opacity: 0.06;
  filter: blur(1px) grayscale(20%);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  transition: all 0.3s ease;
}

/* Logo 1 - Grande, superior izquierda */
.floating-logo.logo-1 {
  width: 280px;
  height: 280px;
  top: -40px;
  left: -60px;
  animation: float-slow 8s infinite;
  opacity: 0.05;
}

/* Logo 2 - Mediano, superior derecha */
.floating-logo.logo-2 {
  width: 200px;
  height: 200px;
  top: 50px;
  right: -40px;
  animation: float-diagonal 10s infinite;
  animation-delay: 1s;
  opacity: 0.07;
}

/* Logo 3 - Pequeño, centro */
.floating-logo.logo-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotate-float 12s infinite;
  animation-delay: 2s;
  opacity: 0.04;
}

/* Logo 4 - Grande, centro con efecto elegante */
.floating-logo.logo-4 {
  width: 450px;
  height: 450px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: float-elegant 15s ease-in-out infinite;
  animation-delay: 0s;
  opacity: 0.035;
  filter: blur(2px) grayscale(10%);
}

/* Logo 5 - Mediano, centro izquierda */
.floating-logo.logo-5 {
  width: 180px;
  height: 180px;
  top: 60%;
  left: 5%;
  animation: float-gentle 11s infinite;
  animation-delay: 3s;
  opacity: 0.06;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-layout {
  display: flex;
  align-items: center;
  gap: 60px;
  min-height: 500px;
  flex-wrap: wrap;
}

#hero-container > .hero-content {
  width: 100%;
}

.hero-logo-container {
  flex: 0 0 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 24px;
  padding: 40px;
  box-shadow:
    0 10px 40px rgba(220, 53, 69, 0.08),
    0 4px 12px rgba(0, 0, 0, 0.04);
  transition: all 0.4s ease;
}

.hero-logo-container:hover {
}

.hero-logo-main {
  width: 280px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 8px 24px rgba(220, 53, 69, 0.15));
  transition: all 0.4s ease;
  animation: pulse-logo 3s ease-in-out infinite;
}

.hero-logo-main:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 12px 32px rgba(220, 53, 69, 0.25));
}

.hero-text-content {
  flex: 1;
  text-align: center;
}

@keyframes pulse-logo {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  margin: 0 0 28px;
  line-height: 1.15;
  letter-spacing: -1px;
  position: relative;
  z-index: 2;
  color: #1F1E23;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* Animación palabra API */
.animated-api {
  display: inline-block;
  position: relative;
  animation: api-fade-in 6s infinite ease-in-out;
}

.api-ghost {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
  animation: api-ghost-move 6s infinite ease-in-out;
  color: #1F1E23;
  font-weight: 900;
}

@keyframes api-fade-in {
  0% { opacity: 0; }
  16.66% { opacity: 1; }
  100% { opacity: 1; }
}

@keyframes api-ghost-move {
  0%, 51% { opacity: 0; transform: translateX(0); font-style: normal; }
  51.6% { opacity: 1; transform: translateX(0); font-style: italic; }
  56.6% { opacity: 0; transform: translateX(440px); font-style: italic; }
  100% { opacity: 0; transform: translateX(440px); }
}

.animated-brand {
  display: inline-block;
  white-space: nowrap;
}

.brand-part-1, .brand-part-2 {
  display: inline-block;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.brand-part-1 {
  animation-name: brand-anim-1;
}

.brand-part-2 {
  animation-name: brand-anim-2;
}

@keyframes brand-anim-1 {
  0%, 16.66% { opacity: 1; transform: translateY(0); }
  25% { opacity: 0; transform: translateY(20px); }
  25.1%, 41.66% { opacity: 0; transform: translateY(-20px); }
  50%, 56.6% { opacity: 1; transform: translateY(0); }
  59% { opacity: 1; transform: translateY(-15px); } /* Salto rápido por impacto */
  62% { opacity: 1; transform: translateY(0); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes brand-anim-2 {
  0%, 16.66% { opacity: 1; transform: translateY(0); } /* 0s-1s */
  25% { opacity: 0; transform: translateY(20px); } /* 1.5s: Desvanece abajo */
  25.1%, 50% { opacity: 0; transform: translateY(-20px); } /* 1.5s-3s: Espera arriba */
  58.33% { opacity: 1; transform: translateY(0); } /* 3.5s: Sufi entra */
  62.5% { opacity: 1; transform: translateY(-12px); } /* 3.75s: Salto */
  66.66%, 100% { opacity: 1; transform: translateY(0); } /* 4s: Aterriza. 4s-6s pausa */
}

.hero-subtitle {
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 24px;
  color: var(--sufi-primary);
  position: relative;
  z-index: 2;
  line-height: 1.5;
  text-shadow: 0 1px 2px rgba(220, 53, 69, 0.1);
}

.hero-description {
  font-size: 19px;
  line-height: 1.7;
  margin: 0 0 40px;
  opacity: 0.9;
  position: relative;
  z-index: 2;
  color: #2c2c2c;
  font-weight: 400;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.description-section .hero-description {
  text-align: center;
  margin: 0 auto;
  font-size: 20px;
  padding: 40px 0;
  
  /* Efecto de destello en el texto */
  background: linear-gradient(
    135deg,
    #2c2c2c 0%,
    #2c2c2c 40%,
    #b0b0b0 50%,
    #2c2c2c 60%,
    #2c2c2c 100%
  );
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  animation: shine-and-jump 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes shine-and-jump {
  0% {
    background-position: 0% 0%;
    transform: translateY(0);
  }
  10% {
    transform: translateY(-2px);
  }
  20% {
    background-position: 100% 100%;
    transform: translateY(0);
  }
  100% {
    background-position: 100% 100%;
    transform: translateY(0);
  }
}

.cta-button {
  background: var(--sufi-primary);
  color: #fff;
  border: none;
  padding: 22px 56px;
  border-radius: 35px;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(220, 53, 69, 0.2);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cta-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 130px; /* Desplazado hacia abajo para evitar cruces con el carrusel */
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
}

.cta-button:hover {
  background: #c82333;
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(220, 53, 69, 0.3);
}

.cta-button:active {
  transform: translateY(-1px);
}

.cta-button.secondary {
  background: transparent;
  color: var(--sufi-primary);
  border: 2px solid var(--sufi-primary);
}

.cta-button.secondary:hover {
  background: var(--sufi-primary);
  color: #fff;
}

.hero-decoration {
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  height: 100px;
  background: #fff;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}

/* Features Section */
.features-section {
  padding: 80px 24px;
  background: #f8f9fa;
}

.section-title {
  font-size: 48px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 10px;
  color: #1F1E23;
  letter-spacing: -0.5px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: #fff;
  padding: 40px 32px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(220, 53, 69, 0.12);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--sufi-primary);
}

.feature-card p {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin: 0;
}

/* Stats Section */
.stats-section {
  padding: 80px 24px;
  color: #fff;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 48px;
  max-width: 900px;
  margin: 0 auto;
}

.stat-card {
  text-align: center;
}

.stat-number {
  font-size: 72px;
  font-weight: 800;
  margin-bottom: 12px;
  line-height: 1;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  min-height: 72px; /* para evitar que brinque cuando está vacío en render inicial */
  color: #000;
}

@property --num-30 {
  syntax: "<integer>";
  initial-value: 30;
  inherits: false;
}

@property --num-6 {
  syntax: "<integer>";
  initial-value: 6;
  inherits: false;
}

@keyframes scramble-30 {
  /* Aparición Emergente (0s - 0.35s) */
  0% { --num-30: 1; transform: translateY(30px) scale(0); opacity: 0; animation-timing-function: ease-out; }
  3% { --num-30: 45; transform: translateY(-10px) scale(1.15); opacity: 1; animation-timing-function: ease-in-out; }
  6% { --num-30: 89; transform: translateY(0) scale(1); opacity: 1; }

  /* Fase Rápida (0.7s - 2s) */
  12% { --num-30: 12; }
  16.6% { --num-30: 90; }

  /* Fase de Desaceleración Gradual (2s - 5s) */
  21% { --num-30: 40; }
  27% { --num-30: 80; }
  32% { --num-30: 50; }
  38% { --num-30: 22; }
  
  /* Salto y llegada al número final (5s - 5.5s) */
  41.6% { --num-30: 30; transform: translateY(0) scale(1); animation-timing-function: ease-out; opacity: 1; }
  43% { --num-30: 30; transform: translateY(-15px) scale(1.1); animation-timing-function: ease-in; }
  44% { --num-30: 30; transform: translateY(0) scale(1); animation-timing-function: ease-out; }
  45% { --num-30: 30; transform: translateY(-5px) scale(1.05); animation-timing-function: ease-in; }
  46% { --num-30: 30; transform: translateY(0) scale(1); }

  /* Reposo (5.5s - 11.5s) */
  96% { --num-30: 30; transform: translateY(0) scale(1); opacity: 1; }
  
  /* Desaparición para reiniciar ciclo (11.5s - 12s) */
  100% { --num-30: 30; transform: translateY(20px) scale(0.5); opacity: 0; }
}

@keyframes scramble-6 {
  /* Aparición Emergente (0s - 0.35s) */
  0% { --num-6: 1; transform: translateY(30px) scale(0); opacity: 0; animation-timing-function: ease-out; }
  3% { --num-6: 9; transform: translateY(-10px) scale(1.15); opacity: 1; animation-timing-function: ease-in-out; }
  6% { --num-6: 85; transform: translateY(0) scale(1); opacity: 1; }

  /* Fase Rápida (0.7s - 2s) */
  12% { --num-6: 15; }
  16.6% { --num-6: 80; }

  /* Fase de Desaceleración Gradual (2s - 5s) */
  21% { --num-6: 30; }
  27% { --num-6: 65; }
  32% { --num-6: 40; }
  38% { --num-6: 12; }
  
  /* Salto y llegada al número final (5s - 5.5s) */
  41.6% { --num-6: 6; transform: translateY(0) scale(1); animation-timing-function: ease-out; opacity: 1; }
  43% { --num-6: 6; transform: translateY(-15px) scale(1.1); animation-timing-function: ease-in; }
  44% { --num-6: 6; transform: translateY(0) scale(1); animation-timing-function: ease-out; }
  45% { --num-6: 6; transform: translateY(-5px) scale(1.05); animation-timing-function: ease-in; }
  46% { --num-6: 6; transform: translateY(0) scale(1); }

  /* Reposo (5.5s - 11.5s) */
  96% { --num-6: 6; transform: translateY(0) scale(1); opacity: 1; }
  
  /* Desaparición para reiniciar ciclo (11.5s - 12s) */
  100% { --num-6: 6; transform: translateY(20px) scale(0.5); opacity: 0; }
}

.stat-number.apis-count {
  animation: scramble-30 12s infinite;
  counter-reset: num var(--num-30);
  display: inline-block;
}

.stat-number.cats-count {
  animation: scramble-6 12s infinite;
  counter-reset: num var(--num-6);
  display: inline-block;
}

.stat-number.apis-count::after,
.stat-number.cats-count::after {
  content: counter(num);
}

.stat-label {
  font-size: 22px;
  opacity: 0.95;
  font-weight: 600;
  color: #000;
}

/* Decorative Divider */
.decorative-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  background: #fff;
  position: relative;
  margin-top: 30px
}

.divider-line {
  flex: 1;
  height: 3px;
  background: linear-gradient(90deg,
    transparent 0%,
    #dc3545 20%,
    #FFD60A 50%,
    #dc3545 80%,
    transparent 100%);
  max-width: 400px;
  position: relative;
  overflow: hidden;
}

.divider-line::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.8) 50%,
    transparent 100%);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% { left: -100%; }
  100% { left: 200%; }
}

.divider-icon-container {
  margin: 0 32px;
  background: #fff;
  border-radius: 50%;
  padding: 20px;
  box-shadow:
    0 0 0 8px rgba(220, 53, 69, 0.1),
    0 0 0 16px rgba(255, 214, 10, 0.1),
    0 8px 24px rgba(220, 53, 69, 0.15);
  position: relative;
  animation: pulse-divider 3s ease-in-out infinite;
}

@keyframes pulse-divider {
  0%, 100% {
    transform: scale(1);
    box-shadow:
      0 0 0 8px rgba(220, 53, 69, 0.1),
      0 0 0 16px rgba(255, 214, 10, 0.1),
      0 8px 24px rgba(220, 53, 69, 0.15);
  }
  50% {
    transform: scale(1.05);
    box-shadow:
      0 0 0 12px rgba(220, 53, 69, 0.15),
      0 0 0 24px rgba(255, 214, 10, 0.15),
      0 12px 32px rgba(220, 53, 69, 0.2);
  }
}

.divider-icon {
  width: 80px;
  height: 80px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 4px 8px rgba(220, 53, 69, 0.2));
  animation: rotate-slow 20s linear infinite;
}

@keyframes rotate-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Categories Section */
.categories-section {
  padding: 0px 24px;
  background: #fff;
}

#hero-container .categories-section {
  padding: 5px 0 0 0;
  background: transparent;
  margin-top: -15px;
}

.section-subtitle {
  font-size: 18px;
  text-align: center;
  color: #666;
  margin-bottom: 50px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Carousel Controls */
.carousel-controls {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 10px;
  position: relative;
  z-index: 20;
}

.carousel-btn {
  background: var(--sufi-primary, #dc3545);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
  transition: all 0.3s ease;
}

.carousel-btn:hover:not(:disabled) {
  transform: scale(1.1);
  background: #c82333;
}

.carousel-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.carousel-container {
  position: relative;
  height: 390px;
  overflow: visible;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 45px;
  z-index: 10;
}

.carousel-track {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-track.is-paused .carousel-item {
  animation-play-state: paused !important;
}

.carousel-track .carousel-item {
  position: absolute;
  top: 0;
  left: 50%;
  width: 320px;
  margin-left: -160px;
  opacity: 0;
  will-change: transform, opacity, current-time; /* Optimización de rendimiento */
  animation: slide-cover-flow 15s infinite, active-state 15s infinite;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
}

.carousel-track:hover .carousel-item {
  animation-play-state: paused;
}

@property --border-angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0turn;
}

@property --active-opacity {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}

@property --sparkle-opacity {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}

.carousel-track .carousel-item::after {
  content: '';
  position: absolute;
  top: -3px; left: -3px; right: -3px; bottom: -3px;
  border-radius: 23px;
  padding: 3px;
  background: conic-gradient(from var(--border-angle, 0turn), transparent 0%, transparent 80%, #dc3545 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  z-index: 10;
  opacity: var(--active-opacity, 0);
  animation: border-spin 3s linear infinite;
  transition: opacity 0.3s ease;
}

.carousel-track .carousel-item:hover::after {
  animation-duration: 1.2s;
}

.carousel-track .carousel-item:nth-child(1), .carousel-track .carousel-item:nth-child(1)::after, .carousel-track .carousel-item:nth-child(1) .category-icon::before, .carousel-track .carousel-item:nth-child(1) .category-icon::after, .carousel-track .carousel-item:nth-child(1) .category-title::before, .carousel-track .carousel-item:nth-child(1) .category-title::after { animation-delay: 0s; }
.carousel-track .carousel-item:nth-child(2), .carousel-track .carousel-item:nth-child(2)::after, .carousel-track .carousel-item:nth-child(2) .category-icon::before, .carousel-track .carousel-item:nth-child(2) .category-icon::after, .carousel-track .carousel-item:nth-child(2) .category-title::before, .carousel-track .carousel-item:nth-child(2) .category-title::after { animation-delay: -2.5s; }
.carousel-track .carousel-item:nth-child(3), .carousel-track .carousel-item:nth-child(3)::after, .carousel-track .carousel-item:nth-child(3) .category-icon::before, .carousel-track .carousel-item:nth-child(3) .category-icon::after, .carousel-track .carousel-item:nth-child(3) .category-title::before, .carousel-track .carousel-item:nth-child(3) .category-title::after { animation-delay: -5s; }
.carousel-track .carousel-item:nth-child(4), .carousel-track .carousel-item:nth-child(4)::after, .carousel-track .carousel-item:nth-child(4) .category-icon::before, .carousel-track .carousel-item:nth-child(4) .category-icon::after, .carousel-track .carousel-item:nth-child(4) .category-title::before, .carousel-track .carousel-item:nth-child(4) .category-title::after { animation-delay: -7.5s; }
.carousel-track .carousel-item:nth-child(5), .carousel-track .carousel-item:nth-child(5)::after, .carousel-track .carousel-item:nth-child(5) .category-icon::before, .carousel-track .carousel-item:nth-child(5) .category-icon::after, .carousel-track .carousel-item:nth-child(5) .category-title::before, .carousel-track .carousel-item:nth-child(5) .category-title::after { animation-delay: -10s; }
.carousel-track .carousel-item:nth-child(6), .carousel-track .carousel-item:nth-child(6)::after, .carousel-track .carousel-item:nth-child(6) .category-icon::before, .carousel-track .carousel-item:nth-child(6) .category-icon::after, .carousel-track .carousel-item:nth-child(6) .category-title::before, .carousel-track .carousel-item:nth-child(6) .category-title::after { animation-delay: -12.5s; }

.carousel-track .carousel-item .category-icon::before, 
.carousel-track .carousel-item .category-icon::after,
.carousel-track .carousel-item .category-title::before,
.carousel-track .carousel-item .category-title::after {
  content: '❤';
  position: absolute;
  color: #dc3545;
  opacity: calc(var(--active-opacity) * var(--sparkle-opacity));
  pointer-events: none;
  z-index: 0;
  line-height: 1;
  transition: opacity 0.3s ease;
  text-shadow: none;
}

.carousel-track .carousel-item .category-icon::before {
  left: 15%;
  top: 30%;
  font-size: 48px;
  animation: heart-fly-left-1 2.5s infinite;
}

.carousel-track .carousel-item .category-icon::after {
  right: 15%;
  top: 35%;
  font-size: 36px;
  animation: heart-fly-right-1 2.5s infinite;
}

.carousel-track .carousel-item .category-title::before {
  left: 20%;
  top: 60%;
  font-size: 58px;
  animation: heart-fly-left-2 2.5s infinite;
}

.carousel-track .carousel-item .category-title::after {
  right: 20%;
  top: 65%;
  font-size: 40px;
  animation: heart-fly-right-2 2.5s infinite;
}

@keyframes slide-cover-flow {
  /* Arrives at Center */
  0% { left: 50%; transform: scale(1.05); opacity: 1; z-index: 2; visibility: visible; pointer-events: auto; }
  
  /* Shake and enlarge in Center */
  2% { left: 50%; transform: scale(1.15) rotate(0deg); opacity: 1; z-index: 2; visibility: visible; pointer-events: auto; }
  3% { left: 50%; transform: scale(1.15) rotate(-3deg); opacity: 1; z-index: 2; visibility: visible; pointer-events: auto; }
  4% { left: 50%; transform: scale(1.15) rotate(3deg); opacity: 1; z-index: 2; visibility: visible; pointer-events: auto; }
  5% { left: 50%; transform: scale(1.15) rotate(-3deg); opacity: 1; z-index: 2; visibility: visible; pointer-events: auto; }
  6% { left: 50%; transform: scale(1.15) rotate(0deg); opacity: 1; z-index: 2; visibility: visible; pointer-events: auto; }
  
  /* Stay in Center */
  14% { left: 50%; transform: scale(1.15) rotate(0deg); opacity: 1; z-index: 2; visibility: visible; pointer-events: auto; }
  
  /* Transition to Left */
  16.67% { left: 15%; transform: scale(0.85); opacity: 0.4; z-index: 1; visibility: visible; pointer-events: none; }
  
  /* Stay in Left */
  31% { left: 15%; transform: scale(0.85); opacity: 0.4; z-index: 1; visibility: visible; pointer-events: none; }
  
  /* Transition to Far Left (Hidden) */
  33.33% { left: -30%; transform: scale(0.5); opacity: 0; z-index: 0; visibility: hidden; pointer-events: none; }
  
  /* Jump to Far Right (Hidden) */
  34% { left: 130%; transform: scale(0.5); opacity: 0; z-index: 0; visibility: hidden; pointer-events: none; }
  
  /* Stay Hidden Far Right */
  81% { left: 130%; transform: scale(0.5); opacity: 0; z-index: 0; visibility: hidden; pointer-events: none; }
  
  /* Transition to Right */
  83.33% { left: 85%; transform: scale(0.85); opacity: 0.4; z-index: 1; visibility: visible; pointer-events: none; }
  
  /* Stay in Right */
  98% { left: 85%; transform: scale(0.85); opacity: 0.4; z-index: 1; visibility: visible; pointer-events: none; }
  
  /* Transition to Center */
  100% { left: 50%; transform: scale(1.05); opacity: 1; z-index: 2; visibility: visible; pointer-events: auto; }
}

@keyframes active-state {
  0%, 16.67%, 100% { --active-opacity: 0; }
  1% { --active-opacity: 0; }
  2%, 14% { --active-opacity: 1; }
  15% { --active-opacity: 0; }
}

@keyframes border-spin {
  to { --border-angle: 1turn; }
}

@keyframes heart-fly-left-1 {
  0%, 10% { --sparkle-opacity: 0; transform: translate(0, 0) scale(0) rotate(-10deg); }
  20% { --sparkle-opacity: 1; transform: translate(-30px, -30px) scale(1) rotate(-15deg); }
  60% { --sparkle-opacity: 0; transform: translate(-140px, -110px) scale(2.0) rotate(-25deg); }
  100% { --sparkle-opacity: 0; transform: translate(-140px, -110px) scale(2.0) rotate(-25deg); }
}

@keyframes heart-fly-right-1 {
  0%, 25% { --sparkle-opacity: 0; transform: translate(0, 0) scale(0) rotate(10deg); }
  35% { --sparkle-opacity: 1; transform: translate(30px, -40px) scale(1) rotate(20deg); }
  75% { --sparkle-opacity: 0; transform: translate(120px, -140px) scale(1.9) rotate(30deg); }
  100% { --sparkle-opacity: 0; transform: translate(120px, -140px) scale(1.9) rotate(30deg); }
}

@keyframes heart-fly-left-2 {
  0%, 40% { --sparkle-opacity: 0; transform: translate(0, 0) scale(0) rotate(-20deg); }
  50% { --sparkle-opacity: 1; transform: translate(-25px, 30px) scale(1) rotate(-30deg); }
  90% { --sparkle-opacity: 0; transform: translate(-110px, 130px) scale(2.2) rotate(-40deg); }
  100% { --sparkle-opacity: 0; transform: translate(-110px, 130px) scale(2.2) rotate(-40deg); }
}

@keyframes heart-fly-right-2 {
  0%, 55% { --sparkle-opacity: 0; transform: translate(0, 0) scale(0) rotate(15deg); }
  65% { --sparkle-opacity: 1; transform: translate(35px, 25px) scale(1) rotate(25deg); }
  95% { --sparkle-opacity: 0; transform: translate(140px, 90px) scale(2.3) rotate(45deg); }
  100% { --sparkle-opacity: 0; transform: translate(140px, 90px) scale(2.3) rotate(45deg); }
}

.category-card {
  background: #fff;
  padding: 40px 32px;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
}

.category-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrado absoluto */
  justify-content: center; /* Centrado absoluto */
  text-align: center;
  background: #fff;
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 1s cubic-bezier(0.2, 1, 0.2, 1), box-shadow 1s ease, background 1s ease;
  z-index: 10;
}

.category-card:hover .category-card-inner {
  transform: scale(1.15);
  box-shadow: 0 25px 60px rgba(220, 53, 69, 0.2);
  background: #fffafa;
  z-index: 100;
}

.category-icon {
  font-size: 64px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.category-card:hover .category-icon {
  transform: scale(1.2) rotate(5deg);
}

.category-title {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 16px;
  color: var(--category-color);
  transition: all 0.3s ease;
}

.category-description {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin: 0;
}

/* Colores por categoría - Paleta Sufi */
.category-card.consulta {
  --category-color: #dc3545;
  --category-color-dark: #c82333;
}

.category-card.gestion {
  --category-color: #2C2A29;
  --category-color-dark: #1a1918;
}

.category-card.simulacion {
  --category-color: #FFD60A;
  --category-color-dark: #e6c209;
}

.category-card.desembolso {
  --category-color: #28a745;
  --category-color-dark: #218838;
}

.category-card.enrrolamiento {
  --category-color: #17a2b8;
  --category-color-dark: #138496;
}

.category-card.registrar {
  --category-color: #6f42c1;
  --category-color-dark: #5a32a3;
}

.category-card.consulta:hover {
  background: linear-gradient(135deg, rgba(220, 53, 69, 0.05) 0%, rgba(200, 35, 51, 0.05) 100%);
}

.category-card.gestion:hover {
  background: linear-gradient(135deg, rgba(44, 42, 41, 0.05) 0%, rgba(26, 25, 24, 0.05) 100%);
}

.category-card.simulacion:hover {
  background: linear-gradient(135deg, rgba(255, 214, 10, 0.1) 0%, rgba(230, 194, 9, 0.1) 100%);
}

.category-card.simulacion .category-title {
  color: #e6c209;
}

.category-card.desembolso:hover {
  background: linear-gradient(135deg, rgba(40, 167, 69, 0.05) 0%, rgba(33, 136, 56, 0.05) 100%);
}

.category-card.enrrolamiento:hover {
  background: linear-gradient(135deg, rgba(23, 162, 184, 0.05) 0%, rgba(19, 132, 150, 0.05) 100%);
}

.category-card.registrar:hover {
  background: linear-gradient(135deg, rgba(111, 66, 193, 0.05) 0%, rgba(90, 50, 163, 0.05) 100%);
}

/* How it Works Section */
.how-it-works-section {
  padding: 80px 24px;
  background: #fff;
}

/* Description Section - Full Width */
.description-section {
  padding: 0px 24px;
  background: linear-gradient(135deg, #fef5f6 0%, #ffffff 50%, #fff9f9 100%);
  width: 100%;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.step-card {
  text-align: center;
  position: relative;
}

.step-number {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
  margin: 0 auto 24px;
  box-shadow: 0 8px 24px rgba(220, 53, 69, 0.2);
}

.step-card h3 {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 16px;
  color: #1F1E23;
}

.step-card p {
  font-size: 18px;
  line-height: 1.6;
  color: #666;
  max-width: 300px;
  margin: 0 auto;
}

/* CTA Section */
.cta-section {
  padding: 100px 24px;
  background: #f8f9fa;
  text-align: center;
}

.cta-title {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #1F1E23;
}

.cta-description {
  font-size: 20px;
  color: #666;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Animations */
@keyframes float-slow {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(10px, -15px) rotate(2deg);
  }
  50% {
    transform: translate(-5px, -25px) rotate(-1deg);
  }
  75% {
    transform: translate(-15px, -10px) rotate(1deg);
  }
}

@keyframes float-diagonal {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(-20px, 15px) rotate(-3deg);
  }
  66% {
    transform: translate(15px, -20px) rotate(2deg);
  }
}

@keyframes rotate-float {
  0%, 100% {
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) rotate(180deg) scale(1.1);
  }
}

@keyframes float-gentle {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(5deg);
  }
}

@keyframes float-elegant {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1) rotate(0deg);
    opacity: 0.035;
  }
  50% {
    transform: translate(-50%, -48%) scale(1.05) rotate(3deg);
    opacity: 0.045;
  }
}

/* Layout Rows */
.top-row {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: stretch;
  margin-bottom: 0;
}

.top-row > #hero-container {
  flex: 1;
}

.horizontal-info-container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100px;
  container-type: size;
  container-name: info;
  margin-top: 20px
}

.horizontal-info-container > .stats-section {
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5cqh 2cqw;
}

.horizontal-info-container > .how-it-works-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5cqh 2cqw;
}

.horizontal-info-container .stats-grid {
  gap: 2cqw;
}

.horizontal-info-container .stats-grid .stat-card {
  position: relative;
}

.horizontal-info-container .stats-grid .stat-card:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 10%;
  right: -1cqw;
  width: 2px;
  height: 80%;
  background-color: #000;
  transform: translateX(50%);
}

.horizontal-info-container .stat-number {
  font-size: 40cqh;
  min-height: 40cqh;
  margin-bottom: 2cqh;
}

.horizontal-info-container .stat-label {
  font-size: 15cqh;
}


.horizontal-info-container .section-title {
  font-size: 30cqh;
  margin-bottom: 2.4cqh;
}

.horizontal-info-container .steps-grid {
  gap: 1.2cqw;
  grid-template-columns: repeat(3, 1fr);
}

.horizontal-info-container .step-card {
  padding: 2.4cqh 1.2cqw;
}

.horizontal-info-container .step-number {
  width: 24cqh;
  height: 24cqh;
  font-size: 12cqh;
  margin: 0 auto 2.4cqh;
}

.horizontal-info-container .step-card h3 {
  font-size: 16.8cqh;
  margin-bottom: 1.2cqh;
}

.horizontal-info-container .step-card p {
  font-size: 10.8cqh;
}

/* Responsive Design */
/* Tablets y pantallas medianas */
@media (max-width: 1024px) {
  .top-row,
  .horizontal-info-container {
    flex-direction: column;
    gap: 32px;
  }

  .hero-layout {
    gap: 40px;
  }

  .hero-logo-main {
    width: 220px;
  }

  .hero-title {
    font-size: 40px;
  }

  .features-grid,
  .steps-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 32px;
  }

  .carousel-container {
    height: 280px;
  }
}

/* Tablets pequeños */
@media (max-width: 768px) {
  .hero-section {
    padding: 50px 20px;
  }

  .hero-layout {
    flex-direction: column;
    gap: 32px;
    min-height: auto;
  }

  .hero-logo-container {
    flex: none;
  }

  .hero-logo-main {
    width: 180px;
  }

  .hero-text-content {
    text-align: center;
  }

  .hero-title {
    font-size: 32px;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .hero-description {
    font-size: 15px;
  }

  .cta-button {
    width: 100%;
    max-width: 100%;
    padding: 18px 30px;
    font-size: 18px;
    justify-content: center;
  }
  
  .cta-container {
    margin-top: 50px;
    padding: 0 20px;
  }

  .floating-logo {
    opacity: 0.04 !important;
  }

  .floating-logo.logo-1 {
    width: 150px;
    height: 150px;
  }

  .floating-logo.logo-2 {
    width: 120px;
    height: 120px;
  }

  .floating-logo.logo-3 {
    width: 90px;
    height: 90px;
  }

  .floating-logo.logo-4 {
    width: 250px;
    height: 250px;
    opacity: 0.025 !important;
  }

  .floating-logo.logo-5 {
    width: 100px;
    height: 100px;
  }

  .carousel-container {
    height: 450px;
    overflow: visible;
    padding: 20px 0;
  }

  .carousel-track {
    display: flex !important;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 30px;
    padding: 20px 40px;
    width: 100% !important;
    animation: none !important;
    -webkit-overflow-scrolling: touch;
  }

  .carousel-track::-webkit-scrollbar {
    display: none;
  }

  .carousel-item {
    flex: 0 0 300px; /* Ancho fijo para móvil */
    height: 380px !important; /* Altura vital para visibilidad */
    position: relative !important;
    opacity: 1 !important;
    transform: none !important;
    scroll-snap-align: center;
    visibility: visible !important;
    display: block !important;
  }

  .category-card {
    padding: 32px 24px;
  }

  .category-icon {
    font-size: 56px;
  }

  .category-title {
    font-size: 24px;
  }

  .category-description {
    font-size: 15px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .stat-number {
    font-size: 56px;
  }

  .stat-label {
    font-size: 18px;
  }

  .step-number {
    width: 70px;
    height: 70px;
    font-size: 32px;
  }

  .step-card h3 {
    font-size: 28px;
  }

  .step-card p {
    font-size: 16px;
  }

  .features-section,
  .stats-section,
  .how-it-works-section,
  .cta-section {
    padding: 60px 20px;
  }
}

/* Móviles */
@media (max-width: 640px) {
  .bg-decoration {
    display: none; /* Limpieza total del fondo para mejorar legibilidad */
  }

  .hero-section {
    padding: 60px 16px;
    text-align: center;
  }

  .hero-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .hero-text-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .categories-section {
    width: 100vw;
    margin-left: -16px; /* Para que el carrusel sangre a los bordes */
  }

  .horizontal-info-container {
    display: flex;
    flex-direction: column !important;
    height: auto !important;
    container-type: normal !important; /* Evita que las unidades cqh colapsen */
    gap: 0;
    padding: 0;
  }

  .how-it-works-section {
    display: flex !important;
    visibility: visible !important;
    position: relative;
    width: 100%;
    padding: 40px 20px !important; /* Padding real en px */
    margin-bottom: 20px;
    height: auto !important;
  }

  .decorative-divider {
    position: relative;
    width: 100%;
    padding: 40px 16px;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .description-section {
    position: relative;
    width: 100%;
    padding: 40px 20px;
    margin-top: 20px;
    text-align: center;
  }

  .hero-logo-main {
    width: 160px;
  }

  .hero-title {
    font-size: 22px; /* Más compacto y legible */
    line-height: 1.3;
  }

  .hero-subtitle {
    font-size: 14px;
    line-height: 1.5;
  }

  .hero-description {
    font-size: 13px;
    line-height: 1.6;
  }

  .cta-button {
    padding: 14px 28px;
    font-size: 16px;
  }

  .section-title {
    font-size: 22px;
    margin-bottom: 30px;
  }

  .section-subtitle {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .cta-title {
    font-size: 22px;
  }

  .cta-description {
    font-size: 14px;
  }

  .stat-number {
    font-size: 42px;
  }

  .stat-label {
    font-size: 14px;
  }

  .step-number {
    width: 60px;
    height: 60px;
    font-size: 28px;
    margin-bottom: 20px;
  }

  .stat-card, .step-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px 20px;
  }

  .step-card h3 {
    font-size: 20px;
  }

  .step-card p {
    font-size: 14px;
    max-width: 280px;
    margin: 0 auto;
  }

  .cta-container {
    margin-top: 60px;
    margin-bottom: 20px;
  }

  .feature-icon {
    width: 60px;
    height: 60px;
    font-size: 28px;
  }

  .feature-card h3 {
    font-size: 20px;
  }

  .feature-card p {
    font-size: 14px;
  }

  .features-section,
  .stats-section,
  .how-it-works-section,
  .cta-section,
  .categories-section {
    padding: 50px 16px;
  }

  .category-card {
    padding: 28px 20px;
  }

  .category-icon {
    font-size: 52px;
  }

  .category-title {
    font-size: 22px;
  }

  .category-description {
    font-size: 14px;
  }

  .floating-logo.logo-4 {
    width: 200px;
    height: 200px;
  }
}

/* Móviles pequeños */
@media (max-width: 375px) {
  .hero-section {
    padding: 32px 12px 60px;
  }

  .hero-logo-main {
    width: 140px;
  }

  .hero-title {
    font-size: 24px;
  }

  .hero-subtitle {
    font-size: 14px;
  }

  .hero-description {
    font-size: 13px;
  }

  .cta-button {
    padding: 12px 24px;
    font-size: 15px;
  }

  .section-title {
    font-size: 24px;
  }

  .cta-title {
    font-size: 24px;
  }

  .stat-number {
    font-size: 42px;
  }

  .step-card h3 {
    font-size: 22px;
  }

  .features-section,
  .stats-section,
  .how-it-works-section,
  .cta-section,
  .categories-section {
    padding: 40px 12px;
  }

  .category-card {
    padding: 24px 16px;
  }

  .category-icon {
    font-size: 48px;
  }

  .category-title {
    font-size: 20px;
  }

  .category-description {
    font-size: 13px;
  }
}

/* Tinder-style Multiple Fire Animation */
.fire-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 100;
  pointer-events: none;
}

.fire {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  opacity: 0;
  animation: fire-float-up 1.6s ease-in-out forwards;
}

.fire-1 { animation-delay: 0s; left: 35%; font-size: 50px; }
.fire-2 { animation-delay: 0.1s; left: 65%; font-size: 40px; }
.fire-3 { animation-delay: 0.2s; left: 20%; font-size: 60px; }
.fire-4 { animation-delay: 0.3s; left: 80%; font-size: 45px; }
.fire-5 { animation-delay: 0.4s; left: 50%; font-size: 70px; }

@keyframes fire-float-up {
  0% {
    transform: translate(-50%, 0) scale(0.5);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -200px) scale(2);
    opacity: 0;
  }
}

/* Floating Widget & Chat SUFIA (Rediseñado) */
.sufia-widget-container {
  position: fixed;
  right: 12%; /* Cerca del centro-derecha */
  top: 55%;
  transform: translateY(-50%);
  z-index: 9999;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.floating-widget-sufia-new {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: relative;
}

.robot-icon-circle {
  width: 125px; /* 50% más pequeña */
  height: 125px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dc3545;
  filter: drop-shadow(0 0 15px rgba(220, 53, 69, 0.6));
  position: relative;
  z-index: 2;
  animation: buzz-loop 1s ease-in-out infinite;
}

@keyframes buzz-loop {
  0%, 80%, 100% { transform: translate(0, 0) rotate(0deg); }
  82% { transform: translate(-6px, -6px) rotate(-4deg); }
  84% { transform: translate(6px, 6px) rotate(4deg); }
  86% { transform: translate(-6px, 6px) rotate(-4deg); }
  88% { transform: translate(6px, -6px) rotate(4deg); }
  90% { transform: translate(-6px, -6px) rotate(-4deg); }
  92% { transform: translate(6px, 6px) rotate(4deg); }
}

/* Background Animation Styles - Digital City (Solo Edificios) */
.sufia-chat-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 10000;
  /* Espacio de seguridad para no tapar el carrusel */
  pointer-events: auto;
}

.bg-animation-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #0a0a0c;
  overflow: hidden;
  pointer-events: none;
}

.bg-dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 10, 12, 0.8) 100%);
  z-index: 1;
}

.bg-svg {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
}

/* Animaciones de "Respiración" */
.building-anim-1 { animation: buildingBreath 4s ease-in-out infinite; }
.building-anim-2 { animation: buildingBreath 5s ease-in-out infinite -1s; }
.building-anim-3 { animation: buildingBreath 6s ease-in-out infinite -2s; }

@keyframes buildingBreath {
  0%, 100% { opacity: 0.4; filter: brightness(1); }
  50% { opacity: 0.8; filter: brightness(1.5) drop-shadow(0 0 15px currentColor); }
}

/* Partículas de Datos Ascendentes */
.particle {
  opacity: 0;
  animation: particleRise 3s linear infinite;
}

@keyframes particleRise {
  0% { transform: translateY(0); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateY(-500px); opacity: 0; }
}

.particle-1 { left: 10%; animation-delay: 0s; }
.particle-2 { left: 15%; animation-delay: 0.5s; }
.particle-3 { left: 25%; animation-delay: 1.2s; }
.particle-4 { left: 35%; animation-delay: 0.8s; }
.particle-5 { left: 45%; animation-delay: 1.5s; }
.particle-6 { left: 55%; animation-delay: 0.3s; }
.particle-7 { left: 65%; animation-delay: 2.1s; }
.particle-8 { left: 75%; animation-delay: 1.1s; }
.particle-9 { left: 85%; animation-delay: 0.6s; }
.particle-10 { left: 95%; animation-delay: 1.9s; }

/* Background Decoration: Doble Gradiente Sutil y Equilibrado */
.bg-decoration {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
  /* Gradientes localizados en las esquinas */
  background: 
    radial-gradient(ellipse 80% 60% at 0% 0%, rgba(220, 53, 69, 0.15) 0%, transparent 80%),
    radial-gradient(ellipse 60% 40% at 100% 100%, rgba(255, 107, 129, 0.10) 0%, transparent 70%);
}

/* Estilos Globales para asegurar que las animaciones funcionen */
.bg-decoration .dot {
  position: absolute !important;
  width: 5px !important;
  height: 5px !important;
  border-radius: 50% !important;
  z-index: 9999 !important;
  filter: blur(0.2px) !important;
  animation-name: slide-horizontal-forced !important;
  animation-timing-function: ease-in-out !important;
  animation-iteration-count: infinite !important;
  animation-direction: alternate !important;
  will-change: transform !important;
}

/* Puntos inferiores (Animación más pequeña) */
.bg-decoration .dot.br {
  width: 4px !important; /* Aún más pequeños */
  height: 4px !important;
  animation-name: slide-horizontal-br !important;
}

.dot.dc { background: #dc3545 !important; box-shadow: 0 0 10px 3px rgba(220,53,69,0.7) !important; }
.dot.rs { background: #ff6b81 !important; box-shadow: 0 0 10px 3px rgba(255,107,129,0.6) !important; }
.dot.pk { background: #ff9eb5 !important; box-shadow: 0 0 10px 3px rgba(255,158,181,0.6) !important; }
.dot.cr { background: #c0392b !important; box-shadow: 0 0 10px 3px rgba(192,57,43,0.7) !important; }

/* Animación de Navegación Elíptica Superior Izquierda (Original) */
@keyframes slide-horizontal-forced {
  0%   { transform: translate3d(0, 0, 0); opacity: 0.7; }
  25%  { transform: translate3d(150px, 30px, 0); }
  50%  { transform: translate3d(300px, 0, 0); opacity: 1; }
  75%  { transform: translate3d(150px, -30px, 0); }
  100% { transform: translate3d(0, 0, 0); opacity: 0.7; }
}

/* Animación Inferior Derecha (Desplazamiento Reducido) */
@keyframes slide-horizontal-br {
  0%   { transform: translate3d(0, 0, 0); opacity: 0.6; }
  25%  { transform: translate3d(-60px, -15px, 0); }
  50%  { transform: translate3d(-120px, 0, 0); opacity: 0.9; }
  75%  { transform: translate3d(-60px, 15px, 0); }
  100% { transform: translate3d(0, 0, 0); opacity: 0.6; }
}


.home-page {
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: transparent;
  padding: 60px 24px 0 24px;
  overflow: hidden;
}

.hero-section {
  position: relative;
  background: transparent;
  padding: 60px 24px 0 24px;
  overflow: hidden;
}

/* Legibilidad Premium */
.hero-title, .section-title, .category-title {
  color: #1F1E23 !important;
}

.hero-subtitle, .section-subtitle, .category-description {
  color: #666 !important;
}

.animated-api, .brand-part-1, .brand-part-2 {
  color: #1F1E23 !important;
}

.robot-svg {
  width: 100%;
  height: 100%;
}

.widget-pulse-new {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(220, 53, 69, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  z-index: 1;
  pointer-events: none;
  animation: destellos-anim 1.5s ease-out infinite;
}

@keyframes destellos-anim {
  0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
  50% { opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
}

.widget-label-new {
  background: #dc3545;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 800;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 8px 20px rgba(220, 53, 69, 0.2);
  letter-spacing: 0.5px;
  position: relative;
  z-index: 2;
}

/* Chat Window - Manteniendo premium */
.sufia-chat-window {
  width: 400px;
  height: 600px;
  background: white;
  border-radius: 32px;
  box-shadow: 0 30px 100px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  animation: chat-open-anim 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes chat-open-anim {
  0% { transform: scale(0.3) rotate(-10deg); opacity: 0; }
  100% { transform: scale(1) rotate(0); opacity: 1; }
}

.chat-header {
  background: #dc3545;
  color: white;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.avatar-small {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255,255,255,0.4);
}

.header-info h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 800;
}

.header-info p {
  margin: 0;
  font-size: 12px;
  opacity: 0.8;
}

.close-chat {
  background: rgba(255,255,255,0.2);
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all 0.3s ease;
}

.close-chat:hover {
  background: rgba(255,255,255,0.3);
  transform: scale(1.1);
}

.chat-messages {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.message {
  max-width: 85%;
  padding: 18px 22px;
  font-size: 15px;
  line-height: 1.6;
  position: relative;
  animation: message-in 0.4s ease forwards;
}

@keyframes message-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.sufi-msg, .sufia-msg {
  align-self: flex-start;
  background: white;
  border-radius: 24px 24px 24px 6px;
  color: #1F1E23;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  border: 1px solid #f0f0f0;
}

.user-msg {
  align-self: flex-end;
  background: #dc3545;
  color: white;
  border-radius: 24px 24px 6px 24px;
  box-shadow: 0 8px 20px rgba(220, 53, 69, 0.2);
}

.api-list {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.api-item {
  background: rgba(0, 0, 0, 0.03);
  padding: 10px 15px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  color: #dc3545;
  border: 1px solid rgba(220, 53, 69, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.api-item.clickable {
  cursor: pointer;
}

.api-item.clickable:hover {
  background: rgba(220, 53, 69, 0.08);
  transform: translateX(5px);
  border-color: #dc3545;
}

.api-item span {
  font-size: 16px;
}

.explore-other-cases-bubble {
  position: absolute;
  top: -35px;
  right: 20px;
  background: rgba(220, 53, 69, 0.9);
  color: #fff;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(220, 53, 69, 0.3);
  z-index: 100;
  animation: float-bubble 3s ease-in-out infinite;
  white-space: nowrap;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.explore-other-cases-bubble:hover {
  background: #dc3545;
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 6px 15px rgba(220, 53, 69, 0.4);
}

@keyframes float-bubble {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.chat-footer.selection-only {
  padding: 25px 20px;
  background: #f8f9fa;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.chat-actions.centered {
  width: 100%;
  display: flex;
  justify-content: center;
}

.finish-btn.large {
  padding: 12px 40px;
  font-size: 14px;
  border-radius: 50px;
  background: #6c757d;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.finish-btn.large:hover {
  background: #5a6268;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}


.chat-input {
  width: 100%;
  padding: 18px;
  border: 2px solid #f0f0f0;
  border-radius: 18px;
  outline: none;
  font-size: 15px;
  transition: all 0.3s ease;
}

.chat-input:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 4px rgba(220, 53, 69, 0.1);
}

.chat-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.finish-btn {
  background: white;
  color: #666;
  border: 1px solid #ddd;
  padding: 14px 24px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  transition: all 0.3s ease;
}

.finish-btn:hover {
  background: #f8f8f8;
  border-color: #ccc;
  color: #333;
}

.send-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 15px;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(220, 53, 69, 0.3);
}

.sufia-msg.thinking {
  padding: 12px 20px;
  min-width: 60px;
}

.typing-loader {
  display: flex;
  gap: 4px;
  align-items: center;
  height: 20px;
}

.typing-loader span {
  width: 6px;
  height: 6px;
  background: #dc3545;
  border-radius: 50%;
  animation: typing 1s infinite ease-in-out;
}

.typing-loader span:nth-child(2) { animation-delay: 0.2s; }
.typing-loader span:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing {
  0%, 100% { transform: translateY(0); opacity: 0.4; }
  50% { transform: translateY(-5px); opacity: 1; }
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 20px;
}




.use-case-card {
  background: #fdfdfd;
  border: 1px solid #eee;
  padding: 10px 8px;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

@media (max-width: 768px) {
  .sufia-chat-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
  .sufia-chat-window {
    width: 95vw;
    height: 80vh;
  }
}

.use-case-card:hover {
  border-color: #dc3545;
  background: #fffafa;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(220, 53, 69, 0.1);
}

.uc-icon {
  font-size: 18px;
  margin-bottom: 4px;
}

.uc-name {
  font-size: 10px;
  font-weight: 800;
  color: #1F1E23;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.2px;
}

.explore-more-container {
  position: absolute;
  bottom: 145px; /* Más arriba */
  left: 0;
  right: 15px; /* Desplazado a la derecha */
  display: flex;
  justify-content: flex-end; /* Alineado a la derecha */
  z-index: 10;
  pointer-events: none;
}

.explore-more-bubble {
  background: white;
  color: #dc3545;
  padding: 6px 12px; /* Más pequeño */
  border-radius: 16px;
  font-size: 11px; /* Fuente más pequeña */
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.2);
  border: 1.5px solid #dc3545;
  cursor: pointer;
  pointer-events: auto;
  animation: float-bubble 2s ease-in-out infinite;
  transition: all 0.3s ease;
}

.explore-more-bubble:hover {
  background: #dc3545;
  color: white;
  transform: scale(1.1);
}

@keyframes float-bubble {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.send-btn:disabled, .chat-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  filter: grayscale(0.5);
}

.send-btn:hover {
  background: #c82333;
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(220, 53, 69, 0.4);
}

/* --- Estilos de Corazón en Llamas (Popular) --- */
.category-card {
  position: relative;
  overflow: visible !important;
}

.popular-badge {
  position: absolute;
  top: -15px;
  right: -10px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

.p-heart {
  font-size: 28px;
  filter: drop-shadow(0 0 8px rgba(220, 53, 69, 0.6));
  animation: heart-buzz 0.5s ease-in-out infinite;
  display: inline-block;
}

@keyframes heart-buzz {
  0%, 100% { transform: rotate(0) scale(1); }
  25% { transform: rotate(3deg) scale(1.05); }
  75% { transform: rotate(-3deg) scale(1.05); }
}

.p-flames {
  position: absolute;
  top: -10px;
  width: 100%;
  height: 40px;
}

.p-flame {
  position: absolute;
  font-size: 16px;
  left: 50%;
  transform: translateX(-50%);
  animation: flame-rise 1.5s ease-out infinite;
  opacity: 0;
}

.p-flame:nth-child(2) { animation-delay: 0.5s; font-size: 12px; }
.p-flame:nth-child(3) { animation-delay: 1s; font-size: 18px; }

@keyframes flame-rise {
  0% { 
    transform: translateX(-50%) translateY(10px) scale(0.5); 
    opacity: 0; 
  }
  30% { 
    opacity: 0.8; 
  }
  100% { 
    transform: translateX(-50%) translateY(-35px) scale(1.5); 
    opacity: 0; 
  }
}

/* --- Gesto de Clíck Premium --- */
/* --- Efecto Explosión de Fuego --- */
.click-flames-burst {
  position: absolute;
  bottom: 0; /* Inicia desde abajo */
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 20px;
  pointer-events: none;
  z-index: 20;
  display: flex;
  justify-content: center;
}

.burst-flame {
  position: absolute;
  font-size: 38px;
  animation: fire-burst 1.7s cubic-bezier(0.12, 0, 0.39, 0) forwards;
  opacity: 0;
  filter: drop-shadow(0 0 20px rgba(255, 69, 0, 0.6));
}

.burst-flame:nth-child(1) { --ix: -120px; --tx: -200px; --ty: -450px; animation-delay: 0s; }
.burst-flame:nth-child(2) { --ix: -80px; --tx: -140px; --ty: -500px; animation-delay: 0.15s; }
.burst-flame:nth-child(3) { --ix: -40px; --tx: -80px; --ty: -550px; animation-delay: 0.05s; }
.burst-flame:nth-child(4) { --ix: 0px; --tx: -15px; --ty: -600px; animation-delay: 0.25s; } /* Central 1 */
.burst-flame:nth-child(5) { --ix: 0px; --tx: 15px; --ty: -620px; animation-delay: 0.35s; }  /* Central 2 */
.burst-flame:nth-child(6) { --ix: 40px; --tx: 80px; --ty: -550px; animation-delay: 0.08s; }
.burst-flame:nth-child(7) { --ix: 80px; --tx: 140px; --ty: -500px; animation-delay: 0.2s; }
.burst-flame:nth-child(8) { --ix: 120px; --tx: 200px; --ty: -450px; animation-delay: 0.12s; }
.burst-flame:nth-child(9) { --ix: 0px; --tx: 0px; --ty: -580px; animation-delay: 0.45s; }   /* Central 3 */

@keyframes fire-burst {
  0% {
    transform: translate(var(--ix), 0) scale(0.5);
    opacity: 0;
  }
  15% {
    opacity: 1;
    transform: translate(var(--ix), -30px) scale(1.2);
  }
  60% {
    opacity: 0.8;
  }
  100% {
    transform: translate(var(--tx), var(--ty)) scale(3.2);
    opacity: 0;
  }
}

.category-card.is-clicking .category-card-inner {
  animation: click-buzz 0.5s ease-in-out forwards;
  border: 3px solid #dc3545;
  background: #fff5f5;
  box-shadow: 0 0 40px rgba(220, 53, 69, 0.6);
}

@keyframes click-buzz {
  0% { transform: scale(1); }
  50% { transform: scale(0.94); }
  100% { transform: scale(1.04); }
}
</style>

