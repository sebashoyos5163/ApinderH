<template>
  <div class="match-container">
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
    <!-- Barra de búsqueda principal -->
    <header class="hero">
      <!-- Título con botón de regreso -->
      <div class="title-row">
        <h1 class="hero-title">Busca API o producto con palabra clave</h1>
        <button class="back-home-btn" @click="goToHome" title="Volver al inicio">
          <span class="arrow-icon">←</span>
          <span>Volver al inicio</span>
        </button>
      </div>
      <div class="search-row">
        <input
          ref="searchInput"
          v-model="inputSearch"
          type="text"
          class="search-input"
          placeholder="🔍 Busca por nombre, categoría, descripción o palabra clave..."
          aria-label="Buscar APIs por palabra clave"
        />
        <button class="icon-btn clear-search-btn" @click="clearSearchInput" :disabled="!inputSearch" aria-label="Limpiar búsqueda" title="Limpiar búsqueda">
          <span class="material-icon">✕</span>
        </button>
        <button class="icon-btn" @click="applySearch" :disabled="loadingSearch" aria-label="Buscar">
          <span class="material-icon">🔍</span>
        </button>
      </div>
      <p class="hero-sub">Si aún no decides qué estás buscando explora algunas de las opciones que tenemos diseñadas para ti</p>

      <!-- Indicador de filtro activo -->
      <div v-if="selectedCategory" class="active-filter">
        <span class="filter-label">📂 Filtrando por:</span>
        <span class="filter-value">{{ selectedCategory }}</span>
        <button class="clear-filter-btn" @click="clearCategoryFilter" title="Limpiar filtro">✕</button>
      </div>

      <button class="explore-btn" @click="toggleCategoryView">{{ showCategories ? 'Ver todas las APIs' : 'Explorar categorías' }}</button>
    </header>

    <!-- Sección de exploración por categorías -->
    <section v-if="showCategories" ref="categories" class="categories-section">
      <h2 class="section-title">Explorar por Categoría</h2>
      <div class="categories-grid">
        <div
          v-for="category in availableCategories"
          :key="category.name"
          class="category-card"
          @click="filterByCategory(category.name)"
        >
          <div class="category-header">
            <h3 class="category-name">{{ category.name }}</h3>
            <span class="category-count">{{ category.count }} API{{ category.count !== 1 ? 's' : '' }}</span>
          </div>
          <div class="category-apis">
            <div v-for="api in category.apis.slice(0, 3)" :key="api.id" class="category-api-item">
              <span class="api-dot">•</span>
              <span class="api-item-name">{{ api.nombreEspanol || api.nombreIngles || 'Sin nombre' }}</span>
            </div>
            <div v-if="category.count > 3" class="more-apis">
              + {{ category.count - 3 }} más
            </div>
          </div>
          <button class="view-category-btn">Ver APIs de {{ category.name }}</button>
        </div>
      </div>
    </section>

    <!-- Decorative Divider -->
    <div v-if="showCategories" class="decorative-divider">
      <div class="divider-line"></div>
      <div class="divider-icon-container">
        <img src="@/assets/icons/sufi.png" alt="Sufi" class="divider-icon">
      </div>
      <div class="divider-line"></div>
    </div>

    <!-- Grid de tarjetas -->
    <section ref="grid" class="cards-grid">
      <div
        v-for="api in displayedApis"
        :key="api.id"
        class="api-card"
        :class="[backgroundClass(api.id), { 'is-animating': matchingApi && matchingApi.id === api.id }]"
        :style="{ animationDelay: (api.id % 7) * 0.8 + 's' }"
      >
        <!-- Badge de Popularidad (Corazón en Llamas) -->
        <div v-if="api.popular" class="popular-badge">
          <span class="p-heart">❤️</span>
          <div class="p-flames">
            <span class="p-flame">🔥</span>
            <span class="p-flame">🔥</span>
            <span class="p-flame">🔥</span>
          </div>
        </div>

        <div class="api-card-inner">
          <div class="api-header">
            <h3 class="api-title">{{ api.nombreApi || api.nombreEspanol || api.nombreIngles || 'Sin nombre' }}</h3>
            <p class="api-subtitle" v-if="api.nombreEspanol">{{ api.nombreEspanol }}</p>
            <span class="api-category" v-if="api.categoria">{{ api.categoria }}</span>
          </div>
          <p class="api-desc">{{ truncate(api.descripcion, 200) }}</p>
          <div class="card-actions">
            <a
              v-if="api.link"
              :href="api.link"
              target="_blank"
              rel="noopener"
              class="match-btn"
              @click="handleMatchClick(api, $event)"
              title="Ver documentación"
            >
              <span class="heart" aria-hidden="true">❤</span>
              <span>Hacer match</span>
            </a>
            <button
              v-else
              class="match-btn disabled"
              disabled
              title="Sin documentación disponible"
            >
              <span class="heart" aria-hidden="true">❤</span>
              <span>Sin documentación</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Paginación -->
    <div v-if="totalFiltered > pageSize" class="pagination">
      <button class="pag-btn" :disabled="currentPage===1" @click="goToPage(1)">«</button>
      <button class="pag-btn" :disabled="currentPage===1" @click="prevPage">‹</button>
      <span class="pag-info">Página {{ currentPage }} / {{ totalPages }}</span>
      <button class="pag-btn" :disabled="currentPage===totalPages" @click="nextPage">›</button>
      <button class="pag-btn" :disabled="currentPage===totalPages" @click="goToPage(totalPages)">»</button>
    </div>

    <!-- Estado vacío -->
    <div v-if="displayedApis.length === 0" class="empty-state">
      <p>No se encontraron APIs{{ selectedCategory ? ' en la categoría ' + selectedCategory : ' para tu búsqueda' }}.</p>
      <button class="explore-btn" @click="clearSearch">Limpiar búsqueda</button>
    </div>

    <!-- Overlay de Animación de Match -->
    <div v-if="matchingApi" class="match-overlay">
      <div class="particles-container">
        <div 
          v-for="p in particles" 
          :key="p.id" 
          class="particle"
          :style="{ 
            left: p.x + '%', 
            top: p.y + '%', 
            '--tx': p.tx + 'px', 
            '--ty': p.ty + 'px',
            fontSize: p.size + 'px',
            animationDelay: p.delay + 's'
          }"
        >
          {{ p.emoji }}
        </div>
      </div>

      <!-- Tarjeta que "Vuela" desde su posición original -->
      <div 
        class="api-card floating-match-card" 
        :class="[backgroundClass(matchingApi.id), { 'spinning': isSpinning }]"
        :style="matchCardStyle"
        v-show="!showMatchModal"
      >
        <div class="api-card-inner">
          <div class="api-header">
            <h3 class="api-title">{{ matchingApi.nombreApi || matchingApi.nombreEspanol }}</h3>
            <span class="api-category">{{ matchingApi.categoria }}</span>
          </div>
          <p class="api-desc">{{ matchingApi.descripcion }}</p>
          <div class="match-heart-indicator">❤️</div>
        </div>
      </div>
    </div>

    <!-- Modal de Capacidades (Match Modal) -->
    <div v-if="showMatchModal" class="modal-backdrop" :class="{ 'modal-closing': isClosing }" @click="closeModal">
      <div class="match-modal" :class="{ 'modal-closing': isClosing }" @click.stop>
        <!-- Borde Animado SVG -->
        <svg class="modal-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect x="0" y="0" width="100" height="100" rx="4" fill="none" class="border-rect" />
        </svg>

        <!-- Destello de Luz -->
        <div class="modal-shine-sweep"></div>

        <div class="modal-header">
          <div class="match-badge">¡MATCH!</div>
          <button class="close-modal-btn" @click="closeModal">✕</button>
        </div>
        <div class="modal-body">
          <h2 class="modal-title">Hiciste match con {{ matchingApi.nombreApi }}</h2>
          <p class="modal-subtitle">Aquí te cuento qué te puedo ofrecer esta api:</p>
          
          <div class="capabilities-section">
            <h3 class="cap-title">🚀 Capacidades</h3>
            <p class="cap-detail-invite">
              si deseas conocer en detalle esta capacidad ingresa a 
              <br>
              <a :href="matchingApi.link" target="_blank" class="cap-link-highlight">{{ matchingApi.link }}</a>
            </p>
            <ul class="capabilities-list">
              <li v-for="(cap, idx) in parsedCapabilities" :key="idx" class="cap-item">
                <span class="cap-check">✓</span>
                {{ cap }}
              </li>
            </ul>
          </div>
          
          <div class="modal-actions">
            <a :href="matchingApi.link" target="_blank" class="doc-link-btn">Ver Documentación Completa</a>
            <button class="continue-btn" @click="closeModal">Continuar Explorando</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApiMatchGrid',
  props: {
    apis: { type: Array, required: true },
    initialCategory: { type: String, default: null },
    isInitialSearch: { type: Boolean, default: false }
  },
  data() {
    return {
      inputSearch: '',
      search: '',
      debounceId: null,
      debounceDelay: 350,
      currentPage: 1,
      pageSize: 12,
      matched: new Set(),
      storageKeyMatches: 'apinderMatches',
      storageKeySearch: 'apinderSearch',
      showCategories: false,
      selectedCategory: '',
      loadingSearch: false,
      ignoreNextSearch: false,
      // Estados para la animación de Match
      matchingApi: null,
      isSpinning: false,
      showMatchModal: false,
      particles: [],
      isClosing: false,
      // Datos de posición inicial para el vuelo
      initialRect: { top: 0, left: 0, width: 0, height: 0 }
    }
  },
  computed: {
    availableCategories() {
      const categoryMap = new Map();

      this.apis.forEach(api => {
        const categoryName = api.categoria || 'Sin categoría';
        if (!categoryMap.has(categoryName)) {
          categoryMap.set(categoryName, {
            name: categoryName,
            apis: [],
            count: 0
          });
        }
        const category = categoryMap.get(categoryName);
        category.apis.push(api);
        category.count++;
      });

      return Array.from(categoryMap.values()).sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    },
    filteredApis() {
      const term = this.search.trim().toLowerCase();
      let filtered = this.apis;

      // Filtrar por categoría seleccionada
      if (this.selectedCategory) {
        filtered = filtered.filter(a =>
          (a.categoria || 'Sin categoría') === this.selectedCategory
        );
      }

      // Filtrar por término de búsqueda
      if (term) {
        filtered = filtered.filter(a => {
          // Indexación mejorada por palabras clave incluyendo nombreApi
          const searchableText = [
            a.categoria || '',
            a.nombreApi || '',
            a.nombreEspanol || '',
            a.nombreIngles || '',
            a.descripcion || '',
            a.palabrasClave || '',
            a.xIbmName || ''
          ].join(' ').toLowerCase();

          // Buscar por palabras individuales (mejor indexación)
          const searchWords = term.split(/\s+/).filter(Boolean);

          // Match si todas las palabras están presentes
          return searchWords.every(word => searchableText.includes(word));
        });
      }

      return filtered;
    },
    totalFiltered() { return this.filteredApis.length; },
    totalPages() { return Math.max(1, Math.ceil(this.totalFiltered / this.pageSize)); },
    clampedPage() {
      return Math.min(Math.max(this.currentPage, 1), this.totalPages);
    },
    displayedApis() {
      const start = (this.clampedPage - 1) * this.pageSize;
      return this.filteredApis.slice(start, start + this.pageSize);
    },
    parsedCapabilities() {
      if (!this.matchingApi || !this.matchingApi.beneficios) return [];
      return this.matchingApi.beneficios.split(',').map(b => b.trim());
    },
    matchCardStyle() {
      if (!this.matchingApi || !this.initialRect.width) return {};
      // Estilo inicial que coincide exactamente con la tarjeta del grid
      return {
        '--start-top': `${this.initialRect.top}px`,
        '--start-left': `${this.initialRect.left}px`,
        '--start-width': `${this.initialRect.width}px`,
        '--start-height': `${this.initialRect.height}px`
      };
    }
  },
  watch: {
    inputSearch(val) {
      if (this.ignoreNextSearch) {
        this.ignoreNextSearch = false;
        return;
      }
      if (this.debounceId) clearTimeout(this.debounceId);
      this.debounceId = setTimeout(() => {
        this.search = val;
        this.currentPage = 1;
        this.persistSearch();
      }, this.debounceDelay);
    },
    totalPages(newVal) { if (this.currentPage > newVal) this.currentPage = newVal; },
    initialCategory: {
      immediate: true,
      handler(newCategory) {
        if (newCategory) {
          if (this.isInitialSearch) {
            // Caso Chat: Forzar limpieza y luego escritura con disparo de búsqueda
            this.inputSearch = '';
            this.search = '';
            this.selectedCategory = '';
            
            this.$nextTick(() => {
              this.inputSearch = newCategory;
              // Disparar la búsqueda formalmente
              this.applySearch();
              
              // Foco y evento nativo para asegurar que el DOM identifique la escritura
              const inputEl = this.$refs.searchInput;
              if (inputEl) {
                inputEl.focus();
                inputEl.dispatchEvent(new Event('input', { bubbles: true }));
              }
            });
          } else {
            // Caso Carrusel: Filtro de categoría normal
            this.selectedCategory = newCategory;
            this.inputSearch = '';
            this.search = '';
          }
          this.currentPage = 1;
          this.showCategories = false;
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
    this.loadPersisted();
    // Solo aplicar filtro de categoría si NO es una búsqueda técnica del chat
    if (this.initialCategory && !this.isInitialSearch) {
      this.selectedCategory = this.initialCategory;
    }
  },
  beforeUnmount() { if (this.debounceId) clearTimeout(this.debounceId); },
  methods: {
    truncate(t, m) { if (!t) return ''; return t.length > m ? t.slice(0, m) + '…' : t; },
    backgroundClass(id) { return id % 2 === 0 ? 'bg-cyan' : 'bg-pink'; },
    applySearch() {
      this.search = this.inputSearch;
      this.currentPage = 1;
      this.selectedCategory = '';
      this.persistSearch();
    },
    clearSearch() {
      this.inputSearch='';
      this.search='';
      this.selectedCategory = '';
      this.currentPage=1;
      this.persistSearch();
    },
    clearSearchInput() {
      this.inputSearch = '';
      this.search = '';
      this.currentPage = 1;
      this.persistSearch();
    },
    goToHome() {
      this.$emit('navigate-to-home');
    },
    handleMatchClick(api, event) {
      if (event) event.preventDefault();
      
      const cardEl = event.currentTarget.closest('.api-card');
      const rect = cardEl.getBoundingClientRect();
      
      this.initialRect = {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      };

      this.matchingApi = api;
      this.isSpinning = false;
      this.particles = [];

      // Registrar match (opcional/existente)
      if (!this.isMatched(api)) {
        this.matched.add(api.id);
        this.persistMatches();
      }

      // Iniciar secuencia de animación sincronizada con el vuelo (1.2s)
      setTimeout(() => {
        this.isSpinning = true;
        this.generateParticles();
        
        // Duración de las 5 vueltas (ahora 2s)
        setTimeout(() => {
          this.isSpinning = false;
          this.showMatchModal = true;
        }, 2000);
      }, 1200); // Sincronizado con match-fly-center (1.2s)
    },
    generateParticles() {
      const emojis = ['❤️', '🔥', '💖', '✨'];
      for (let i = 0; i < 30; i++) {
        const isLeft = Math.random() > 0.5;
        this.particles.push({
          id: i,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          x: isLeft ? 40 : 60,
          y: 50, // Volvemos al centro absoluto de la pantalla
          // Trayectoria diagonal: izquierda-arriba o derecha-arriba
          tx: isLeft ? (-300 - Math.random() * 300) : (300 + Math.random() * 300),
          ty: -1000, 
          size: 60 + Math.random() * 40, // Mucho más grandes
          delay: Math.random() * 1.8 
        });
      }
    },
    closeModal() {
      this.isClosing = true;
      setTimeout(() => {
        this.showMatchModal = false;
        this.isClosing = false;
        this.matchingApi = null;
        this.particles = [];
        this.isSpinning = false;
      }, 500);
    },
    toggleCategoryView() {
      this.showCategories = !this.showCategories;
      if (this.showCategories) {
        this.$nextTick(() => {
          const el = this.$refs.categories;
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    },
    filterByCategory(categoryName) {
      this.selectedCategory = categoryName;
      this.showCategories = false;
      this.inputSearch = '';
      this.search = '';
      this.currentPage = 1;
      this.$nextTick(() => {
        const el = this.$refs.grid;
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    },
    clearCategoryFilter() {
      this.selectedCategory = '';
      this.currentPage = 1;
    },
    nextPage() { if (this.currentPage < this.totalPages) this.currentPage++; },
    prevPage() { if (this.currentPage > 1) this.currentPage--; },
    goToPage(p) { if (p>=1 && p<=this.totalPages) this.currentPage = p; },
    toggleMatch(api) {
      if (this.isMatched(api)) this.matched.delete(api.id); else this.matched.add(api.id);
      this.persistMatches();
    },
    isMatched(api) { return this.matched.has(api.id); },
    persistMatches() {
      try {
        localStorage.setItem(this.storageKeyMatches, JSON.stringify(Array.from(this.matched)));
      } catch(e){
        // Silenciar error de localStorage
      }
    },
    persistSearch() {
      try {
        localStorage.setItem(this.storageKeySearch, this.search);
      } catch(e){
        // Silenciar error de localStorage
      }
    },
    loadPersisted() {
      const savedMatches = localStorage.getItem(this.storageKeyMatches);
      if (savedMatches) this.matched = new Set(JSON.parse(savedMatches));
      
      // Si venimos desde una navegación externa (como el chat), ignoramos y limpiamos el persistido
      if (this.initialCategory) {
        localStorage.removeItem(this.storageKeySearch);
        this.inputSearch = this.initialCategory;
        this.search = this.isInitialSearch ? '' : this.initialCategory;
      } else {
        const savedSearch = localStorage.getItem(this.storageKeySearch);
        if (savedSearch) {
          this.inputSearch = savedSearch;
          this.search = savedSearch;
        }
      }
    }
  }
}
</script>

<style scoped>
.match-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: transparent;
  min-height: calc(100vh - 120px);
  padding-bottom: 40px;
  position: relative;
  overflow: hidden;
  animation: slide-in-left 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

/* Background Decoration: Doble Gradiente Sutil y Equilibrado */
.bg-decoration {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99; /* Suficientemente alto para estar al frente pero permitir lectura */
  pointer-events: none;
  overflow: hidden;
  background: 
    radial-gradient(ellipse 80% 60% at 0% 0%, rgba(220, 53, 69, 0.15) 0%, transparent 80%),
    radial-gradient(ellipse 60% 40% at 100% 100%, rgba(255, 107, 129, 0.10) 0%, transparent 70%);
}

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

.bg-decoration .dot.br {
  width: 4px !important;
  height: 4px !important;
  animation-name: slide-horizontal-br !important;
}

.dot.dc { background: #dc3545 !important; box-shadow: 0 0 10px 3px rgba(220,53,69,0.7) !important; }
.dot.rs { background: #ff6b81 !important; box-shadow: 0 0 10px 3px rgba(255,107,129,0.6) !important; }
.dot.pk { background: #ff9eb5 !important; box-shadow: 0 0 10px 3px rgba(255,158,181,0.6) !important; }
.dot.cr { background: #c0392b !important; box-shadow: 0 0 10px 3px rgba(192,57,43,0.7) !important; }

@keyframes slide-horizontal-forced {
  0%   { transform: translate3d(0, 0, 0); opacity: 0.7; }
  25%  { transform: translate3d(150px, 30px, 0); }
  50%  { transform: translate3d(300px, 0, 0); opacity: 1; }
  75%  { transform: translate3d(150px, -30px, 0); }
  100% { transform: translate3d(0, 0, 0); opacity: 0.7; }
}

@keyframes slide-horizontal-br {
  0%   { transform: translate3d(0, 0, 0); opacity: 0.6; }
  25%  { transform: translate3d(-60px, -15px, 0); }
  50%  { transform: translate3d(-120px, 0, 0); opacity: 0.9; }
  75%  { transform: translate3d(-60px, 15px, 0); }
  100% { transform: translate3d(0, 0, 0); opacity: 0.6; }
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-100vw);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.hero { padding:32px 24px 12px; background:#ffffff; border-radius:var(--radius-lg); color:#1F1E23; box-shadow:var(--shadow-md); border: 1px solid #e0e0e0; }

/* Fila del título con botón de regreso */
.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 18px;
}

/* Botón de regreso a home */
.back-home-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 2px solid var(--sufi-primary);
  color: var(--sufi-primary);
  padding: 10px 20px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(220, 53, 69, 0.1);
  white-space: nowrap;
  flex-shrink: 0;
}
.back-home-btn:hover {
  background: var(--sufi-primary);
  color: #fff;
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.2);
}
.arrow-icon {
  font-size: 18px;
  font-weight: bold;
}

.hero-title { margin:0; font-size:34px; line-height:1.15; font-weight:700; color:#1F1E23; }
.hero-sub { margin:24px 0 16px; font-size:16px; font-weight:500; color:#666; }

/* Filtro activo */
.active-filter {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff5f5;
  padding: 12px 18px;
  border-radius: 12px;
  margin: 16px 0;
  border: 2px solid var(--sufi-primary);
}
.filter-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--sufi-primary);
}
.filter-value {
  font-size: 16px;
  font-weight: 700;
  color: #1F1E23;
}
.clear-filter-btn {
  margin-left: auto;
  background: rgba(220, 53, 69, 0.1);
  border: none;
  color: var(--sufi-primary);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.clear-filter-btn:hover {
  background: var(--sufi-primary);
  color: #fff;
  transform: scale(1.1);
}
.api-card {
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  border: 1.5px solid #dc3545; /* Rojo Sufi Unificado */
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  animation: soft-jump 8s ease-in-out infinite; /* Salto etéreo y ultra-lento */
  overflow: visible; /* Para que las llamas sobresalgan */
}

@media (max-width: 768px) {
  .sufia-chat-window {
    width: 95vw;
    height: 80vh;
    bottom: 10px;
    right: 2.5vw;
    border-radius: 20px;
  }
  .api-card.match-fly-center {
    transform: scale(1.05);
  }
}

@keyframes soft-jump {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); } /* Casi imperceptible */
}

/* Badge Popular: Corazón en Llamas */
.popular-badge {
  position: absolute;
  top: -18px;
  right: -12px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.p-heart {
  font-size: 40px; /* Tamaño imponente */
  filter: drop-shadow(0 0 12px rgba(220, 53, 69, 0.8));
  animation: heart-buzz 0.6s ease-in-out infinite;
  display: inline-block;
}

@keyframes heart-buzz {
  0%, 100% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.15) rotate(5deg); } /* Pulsación y rotación */
  75% { transform: scale(1.15) rotate(-5deg); }
}

.p-flames {
  position: absolute;
  top: -10px;
  width: 100%;
  height: 40px;
  pointer-events: none;
}

.p-flame {
  position: absolute;
  font-size: 18px;
  left: 50%;
  transform: translateX(-50%);
  animation: flame-rise 1.5s ease-out infinite;
  opacity: 0;
}

.p-flame:nth-child(2) { animation-delay: 0.5s; font-size: 14px; }
.p-flame:nth-child(3) { animation-delay: 1s; font-size: 20px; }

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

.search-row { 
  display: flex; 
  align-items: center; 
  gap: 12px; 
  position: relative; 
  width: 100%; 
  max-width: 600px; /* Mejor control en desktop, flexible en mobile */
}

@media (max-width: 768px) {
  .search-row {
    max-width: 100%;
    margin-bottom: 10px;
  }
}
.search-input {
  flex: 1;
  background: #fff;
  border: 2px solid #e0e0e0;
  padding:14px 18px;
  font-size:17px;
  color:#1F1E23;
  transition: all 0.3s ease;
  width: 100%;
}
.search-input::placeholder {
  color:#999;
  font-style: italic;
}
.search-input:focus {
  outline:none;
  border-color:var(--sufi-primary);
  background:#fff;
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
}
.icon-btn { background:transparent; border:none; color:var(--sufi-primary); font-size:22px; cursor:pointer; padding:4px 8px; transition: all 0.3s ease; }
.icon-btn:disabled { opacity:.4; cursor:not-allowed; }
.icon-btn:hover:not(:disabled) {
  transform: scale(1.1);
  color: #c82333;
}
.clear-search-btn {
  background: rgba(220, 53, 69, 0.1);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--sufi-primary);
}
.clear-search-btn:hover:not(:disabled) {
  background: var(--sufi-primary);
  color: #fff;
}
.explore-btn {
  background:var(--sufi-primary);
  color:#fff;
  border:none;
  font-weight:700;
  padding:18px 40px;
  border-radius:28px;
  font-size:20px;
  cursor:pointer;
  box-shadow:0 8px 24px rgba(220, 53, 69, 0.2);
  transition:all 0.3s ease;
}
.explore-btn:hover { background:#c82333; transform: translateY(-2px); box-shadow:0 12px 32px rgba(220, 53, 69, 0.3); }

/* Sección de categorías */
.categories-section { padding:32px 24px; }
.section-title {
  font-size:38px;
  font-weight:800;
  margin:0 0 32px;
  text-align:center;
  color:#1F1E23;
  letter-spacing:-0.5px;
}
.categories-grid {
  display:grid;
  gap:24px;
  grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));
}
.category-card {
  background:#fff;
  border-radius:16px;
  padding:24px;
  box-shadow:var(--shadow-md);
  transition:all 0.3s ease;
  cursor:pointer;
  border:2px solid transparent;
}
.category-card:hover {
  transform:translateY(-6px);
  box-shadow:0 12px 32px rgba(220, 53, 69, 0.15);
  border-color:var(--sufi-primary);
}
.category-header {
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:16px;
  padding-bottom:12px;
  border-bottom:2px solid var(--sufi-border);
}
.category-name {
  margin:0;
  font-size:24px;
  font-weight:800;
  color:#1F1E23;
}
.category-count {
  background:var(--sufi-primary);
  color:#fff;
  padding:6px 14px;
  border-radius:20px;
  font-size:13px;
  font-weight:700;
}
.category-apis {
  margin:16px 0;
  min-height:90px;
}
.category-api-item {
  display:flex;
  align-items:center;
  gap:8px;
  margin-bottom:8px;
  font-size:14px;
  color:#4a4a4a;
}
.api-dot {
  color:var(--sufi-primary);
  font-size:20px;
  line-height:1;
}
.api-item-name {
  font-weight:500;
  line-height:1.4;
}
.more-apis {
  margin-top:8px;
  font-size:13px;
  color:var(--sufi-primary);
  font-weight:600;
  font-style:italic;
}
.view-category-btn {
  width:100%;
  background:var(--sufi-primary);
  color:#fff;
  border:none;
  padding:12px 24px;
  border-radius:24px;
  font-weight:700;
  font-size:14px;
  cursor:pointer;
  transition:all 0.3s ease;
}
.view-category-btn:hover {
  transform:translateY(-2px);
  box-shadow:0 6px 16px rgba(220, 53, 69, 0.25);
}

/* Decorative Divider */
.decorative-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 24px;
  background: #fff;
  position: relative;
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
  max-width: 350px;
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
  margin: 0 28px;
  background: #fff;
  border-radius: 50%;
  padding: 16px;
  box-shadow:
    0 0 0 6px rgba(220, 53, 69, 0.1),
    0 0 0 12px rgba(255, 214, 10, 0.1),
    0 6px 20px rgba(220, 53, 69, 0.15);
  position: relative;
  animation: pulse-divider 3s ease-in-out infinite;
}

@keyframes pulse-divider {
  0%, 100% {
    transform: scale(1);
    box-shadow:
      0 0 0 6px rgba(220, 53, 69, 0.1),
      0 0 0 12px rgba(255, 214, 10, 0.1),
      0 6px 20px rgba(220, 53, 69, 0.15);
  }
  50% {
    transform: scale(1.05);
    box-shadow:
      0 0 0 10px rgba(220, 53, 69, 0.15),
      0 0 0 20px rgba(255, 214, 10, 0.15),
      0 10px 28px rgba(220, 53, 69, 0.2);
  }
}

.divider-icon {
  width: 70px;
  height: 70px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 4px 8px rgba(220, 53, 69, 0.2));
  animation: rotate-slow 20s linear infinite;
}

@keyframes rotate-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 0 10px 10px;
}

.api-card {
  border-radius:16px;
  padding:24px;
  position:relative;
  box-shadow:var(--shadow-md);
  display:flex;
  background:#fff;
  border: 2px solid #e0e0e0;
  transition: all 0.3s ease;
}
.api-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(220, 53, 69, 0.15);
  border-color: var(--sufi-primary);
}
.api-card.bg-cyan { border-top: 4px solid #dc3545; }
.api-card.bg-pink { border-top: 4px solid #FFD60A; }
.api-card-inner { 
  display:flex; 
  flex-direction:column; 
  width:100%; 
  height: 100%;
}
.api-header {
  background:#fff;
  color:#1F1E23;
  border-radius:12px;
  padding:16px;
  text-align:center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 2px solid #f0f0f0;
  transition: all 0.3s ease;
}
.api-header:hover {
  border-color: var(--sufi-primary);
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.1);
}
.api-title {
  margin:0;
  font-size:18px;
  font-weight:800;
  color:#1F1E23;
  letter-spacing: -.3px;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}
.api-subtitle {
  margin:6px 0 0;
  font-size:12px;
  font-weight:500;
  opacity:.75;
  color:#666;
  font-style: italic;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.api-category {
  display:inline-block;
  margin-top:12px;
  font-size:11px;
  font-weight:700;
  color:#fff;
  background: var(--sufi-primary);
  padding: 4px 12px;
  border-radius: 16px;
  text-transform:uppercase;
  letter-spacing:.5px;
  box-shadow: var(--shadow-sm);
}
.api-desc {
  margin:0;
  font-size:14px;
  line-height:1.5;
  color:#4a4a4a;
  font-weight:400;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  flex: 1;
}
.card-actions { display:flex; flex-direction: column; gap: 12px; align-items: stretch; margin-top: 8px; }
.match-btn {
  display:inline-flex;
  align-items:center;
  justify-content: center;
  gap:8px;
  background:var(--sufi-primary);
  color:#fff;
  border:none;
  padding:12px 24px;
  border-radius:26px;
  font-size:14px;
  font-weight:700;
  cursor:pointer;
  box-shadow:0 4px 12px rgba(220, 53, 69, 0.2);
  transition:all 0.3s ease;
  text-decoration: none;
}
.match-btn .heart { font-size:16px; }
.match-btn:hover {
  background:#c82333;
  transform: translateY(-2px);
  box-shadow:0 6px 16px rgba(220, 53, 69, 0.3);
}
.match-btn.disabled {
  background: #9e9e9e;
  cursor: not-allowed;
  opacity: 0.6;
}
.match-btn.disabled:hover {
  background: #9e9e9e;
  transform: none;
  box-shadow:0 4px 12px rgba(158, 158, 158, 0.2);
}
.pagination {
  display:flex;
  gap:8px;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  padding: 16px 8px;
}
.pag-btn {
  background:var(--sufi-primary);
  color:#fff;
  border:none;
  padding:10px 16px;
  min-height: 44px;
  min-width: 44px;
  border-radius:var(--radius-md);
  cursor:pointer;
  font-size:14px;
  box-shadow:var(--shadow-sm);
  touch-action: manipulation;
}
.pag-btn:hover:not(:disabled) { background:#c82333; }
.pag-btn:disabled { opacity:.35; cursor:not-allowed; }
.pag-info { font-weight:600; font-size:14px; color:var(--sufi-primary); padding: 0 8px; }
.empty-state {
  text-align:center;
  background:#fff;
  padding:48px 32px;
  border-radius:var(--radius-lg);
  box-shadow:var(--shadow-md);
}
.empty-state p { margin:0 0 16px; font-weight:600; color:#2C2A29; }

/* Responsive Design */
/* Tablets y dispositivos medianos */
@media (max-width: 1024px) {
  .hero-title { font-size: 28px; }
}

/* Tablets pequeños y móviles grandes */
@media (max-width: 768px) {
  .api-match-grid { padding: 10px; }
  
  .hero {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 15px;
    gap: 15px;
  }

  .hero-title { font-size: 20px; text-align: center; width: 100%; }
  
  .search-row { width: 100%; }
  
  .category-name { font-size: 18px; margin-bottom: 12px; }

  .api-card { 
    padding: 16px; 
    min-height: auto;
  }
  
  .api-title { font-size: 16px; }
  
  .match-modal {
    width: 95% !important;
    max-width: 95% !important;
    padding: 20px !important;
    border-radius: 20px !important;
  }

  .match-btn {
    width: 100%;
    justify-content: center;
  }

  .pagination {
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
  
  .title-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .back-home-btn {
    align-self: flex-end;
    font-size: 13px;
    padding: 8px 16px;
  }
  .hero-sub { font-size: 15px; }
  .explore-btn {
    font-size: 15px;
    padding: 12px 24px;
    width: 100%;
  }
  .categories-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .search-row {
    max-width: 100%;
    flex-direction: row;
  }
  .api-subtitle { font-size: 12px; }
}

/* Móviles */
@media (max-width: 640px) {
  .hero { padding: 20px 16px; }
  .title-row { gap: 10px; }
  .hero-title {
    font-size: 22px;
    line-height: 1.2;
  }
  .hero-sub {
    font-size: 14px;
    margin: 16px 0 12px;
  }
  .decorative-divider {
    padding: 35px 16px;
  }
  .divider-line {
    max-width: 150px;
    height: 2px;
  }
  .divider-icon-container {
    margin: 0 16px;
    padding: 12px;
  }
  .divider-icon {
    width: 55px;
    height: 55px;
  }
  .search-input {
    font-size: 15px;
    padding: 12px 14px;
  }
  .icon-btn {
    font-size: 20px;
    min-width: 44px;
    min-height: 44px;
  }
  .clear-search-btn {
    width: 40px;
    height: 40px;
  }
  .explore-btn {
    font-size: 14px;
    padding: 14px 20px;
  }
  .categories-grid { gap: 12px; }
  .category-card { padding: 18px; }
  .category-name { font-size: 20px; }
  .cards-grid {
    gap: 12px;
    padding: 0 4px 4px;
  }
  .api-card { padding: 16px; }
  .api-title { font-size: 16px; }
  .api-category { font-size: 10px; }
  .match-btn {
    padding: 12px 20px;
    font-size: 13px;
  }
  .pag-btn {
    padding: 8px 12px;
    font-size: 13px;
  }
  .pag-info { font-size: 13px; }
}

/* Móviles pequeños */
@media (max-width: 375px) {
  .hero { padding: 16px 12px; }
  .hero-title { font-size: 20px; }
  .back-home-btn span:last-child {
    display: none;
  }
  .back-home-btn .arrow-icon {
    font-size: 20px;
  }
  .search-row { gap: 8px; }
  .api-card { padding: 14px; }
  .category-card { padding: 14px; }
  .popular-badge .p-heart { font-size: 28px; } /* Corazón más pequeño en mobile */
}

/* Ajuste de escala de animación para móviles */
@media (max-width: 768px) {
  @keyframes match-fly-center {
    0% { transform: scale(1); }
    100% { 
      top: calc(50vh - (var(--start-height) * 1.05 / 2));
      left: calc(50vw - (var(--start-width) * 1.05 / 2));
      transform: scale(1.05); /* Escala reducida para mobile */
    }
  }
}

/* --- Animaciones de Match Premium --- */
.api-card.is-animating {
  animation: original-card-fade-out 1.2s ease-out forwards;
  pointer-events: none;
}

@keyframes original-card-fade-out {
  0% { opacity: 1; }
  100% { opacity: 0; visibility: hidden; } /* Desaparece y se mantiene así */
}

.match-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  z-index: 10000;
  overflow: hidden;
}

.floating-match-card {
  position: absolute;
  top: var(--start-top);
  left: var(--start-left);
  width: var(--start-width);
  margin: 0;
  transform: scale(1);
  animation: match-fly-center 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  box-shadow: 0 0 50px rgba(220, 53, 69, 0.3);
  z-index: 10001;
}

.floating-match-card.spinning {
  animation: match-spin-y 2s linear infinite;
}

@keyframes match-fly-center {
  0% { transform: scale(1); }
  70% { transform: scale(1.05); } 
  100% { 
    top: calc(50vh - (var(--start-height) * 1.2 / 2));
    left: calc(50vw - (var(--start-width) * 1.2 / 2));
    transform: scale(1.2); 
  }
}

@keyframes match-spin-y {
  0%   { 
    top: calc(50vh - (var(--start-height) * 1.2 / 2));
    left: calc(50vw - (var(--start-width) * 1.2 / 2));
    transform: scale(1.2) rotateY(0deg); 
    opacity: 1; 
  }
  40%  { 
    top: calc(50vh - (var(--start-height) * 1.2 / 2));
    left: calc(50vw - (var(--start-width) * 1.2 / 2));
    transform: scale(1.2) rotateY(720deg); 
    opacity: 1; 
  }
  60%  { 
    top: calc(50vh - (var(--start-height) * 1.2 / 2));
    left: calc(50vw - (var(--start-width) * 1.2 / 2));
    transform: scale(1.2) rotateY(1080deg); 
    opacity: 0.7; 
  }
  80%  { 
    top: calc(50vh - (var(--start-height) * 1.2 / 2));
    left: calc(50vw - (var(--start-width) * 1.2 / 2));
    transform: scale(1.2) rotateY(1440deg); 
    opacity: 0.4; 
  }
  100% { 
    top: calc(50vh - (var(--start-height) * 1.2 / 2));
    left: calc(50vw - (var(--start-width) * 1.2 / 2));
    transform: scale(1.2) rotateY(1800deg); 
    opacity: 0.1; 
  }
}

/* Partículas */
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  pointer-events: none;
  animation: particle-explode 5s ease-out forwards; /* Más lento y suave */
}

@keyframes particle-explode {
  0% { 
    transform: translate(0, 0) scale(0); 
    opacity: 0; 
  }
  15% {
    opacity: 0.8;
    transform: translate(0, -20px) scale(1);
  }
  100% { 
    transform: translate(var(--tx), var(--ty)) scale(0.6); 
    opacity: 0; 
  }
}

.match-heart-indicator {
  font-size: 80px;
  text-align: center;
  margin-top: 20px;
  animation: heartbeat 1s infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* Modal Premium */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  z-index: 11000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.match-modal {
  position: relative;
  background: #fff;
  width: 90%;
  max-width: 600px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  /* Animación de entrada + Zumbido diferido */
  animation: 
    modal-slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    modal-buzz 0.4s ease-in-out 2.5s 1; /* Inicia después de la entrada (0.5s) + destello (2s) */
}

/* Borde SVG Animado */
.modal-border-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

.border-rect {
  stroke: #dc3545;
  stroke-width: 0.5; /* Línea delgada */
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: border-draw 0.5s linear 0.5s forwards;
}

@keyframes border-draw {
  to { stroke-dashoffset: 0; }
}

/* Destello de Luz */
.modal-shine-sweep {
  position: absolute;
  top: 0;
  left: -150%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg, 
    transparent 30%, 
    rgba(255, 255, 255, 0.4) 50%, 
    transparent 70%
  );
  transform: skewX(-25deg);
  z-index: 11;
  pointer-events: none;
  animation: modal-shine 2s ease-in-out 0.5s forwards;
}

@keyframes modal-shine {
  to { left: 150%; }
}

@keyframes modal-buzz {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.01) rotate(0.5deg); }
  50% { transform: scale(0.99) rotate(-0.5deg); }
  75% { transform: scale(1.01) rotate(0.5deg); }
}

@keyframes modal-slide-up {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.modal-header {
  background: var(--sufi-gradient);
  padding: 30px;
  position: relative;
  display: flex;
  justify-content: center;
}

.match-badge {
  background: #fff;
  color: #dc3545;
  padding: 8px 24px;
  border-radius: 50px;
  font-weight: 800;
  font-size: 12px; /* Más pequeño en modal */
  letter-spacing: 2px;
}

.close-modal-btn {
  position: absolute;
  right: 20px;
  top: 20px;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.modal-body {
  padding: 40px;
}

.modal-title {
  font-size: 28px;
  color: #1F1E23;
  margin-bottom: 10px;
  font-weight: 700;
}

.modal-subtitle {
  color: #666;
  margin-bottom: 30px;
}

.capabilities-section {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 30px;
}

.cap-title {
  font-size: 18px;
  margin-bottom: 16px;
  color: #dc3545;
}

.capabilities-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.cap-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #333;
}

.cap-check {
  color: #28a745;
  font-weight: bold;
}

.modal-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.doc-link-btn {
  background: var(--sufi-gradient);
  color: #fff;
  text-align: center;
  padding: 16px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s;
}

.doc-link-btn:hover {
  transform: translateY(-2px);
}

.continue-btn {
  background: #dc3545; /* Fondo rojizo */
  border: none;
  color: #fff; /* Texto blanco */
  padding: 16px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.continue-btn:hover {
  transform: scale(1.05);
}

/* Animación de destello Shimmer */
.continue-btn::after {
  content: '';
  position: absolute;
  top: -100%;
  left: -100%;
  width: 50%;
  height: 300%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(45deg);
  animation: shimmer-sweep 1s infinite;
}

@keyframes shimmer-sweep {
  0% { top: -100%; left: -100%; }
  100% { top: 100%; left: 100%; }
}

.cap-detail-invite {
  margin: 15px 0;
  font-size: 14px;
  color: #444;
  line-height: 1.6;
}

.cap-link-highlight {
  color: #dc3545;
  text-decoration: none;
  font-weight: 600;
  word-break: break-all;
  transition: opacity 0.3s;
}

.cap-link-highlight:hover {
  opacity: 0.7;
  text-decoration: underline;
}

/* Efectos de Cierre Progresivo */
.modal-backdrop.modal-closing {
  opacity: 0 !important;
  transition: opacity 0.5s ease;
}

.match-modal.modal-closing {
  transform: scale(0.9) translateY(20px) !important;
  opacity: 0 !important;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

</style>

