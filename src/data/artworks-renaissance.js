/**
 * Renaissance Artworks Database (1400-1600)
 * 시대 특징: 균형, 조화, 인본주의, 완벽한 비례
 * 
 * 5명 화가 × 11개 작품
 */

export const renaissanceArtworks = {
  // ========================================
  // Leonardo da Vinci (3개)
  // ========================================
  
  "leonardo-mona": {
    id: "leonardo-mona",
    
    // 기본 정보
    artist: "Leonardo da Vinci",
    artistKo: "레오나르도 다 빈치",
    work: "Mona Lisa",
    workKo: "모나리자",
    year: "1503-1519",
    medium: "Oil on panel",
    mediumKo: "패널에 유채",
    
    // 카테고리 매칭
    primaryCategories: ["portrait"],
    subcategories: ["portrait-closeup"],
    secondaryCategories: ["mixed-portrait-landscape"],
    
    // FLUX 프롬프트
    prompt: `in the style of Mona Lisa by Leonardo da Vinci,
      sfumato technique with soft blurred edges,
      mysterious enigmatic expression,
      atmospheric hazy background with distant landscape,
      Renaissance portrait masterpiece,
      subtle transitions between light and shadow,
      no sharp outlines`,
    
    // 핵심 키워드
    keywords: ["sfumato", "soft edges", "mysterious", "atmospheric perspective"]
  },

  "leonardo-supper": {
    id: "leonardo-supper",
    
    artist: "Leonardo da Vinci",
    artistKo: "레오나르도 다 빈치",
    work: "The Last Supper",
    workKo: "최후의 만찬",
    year: "1495-1498",
    medium: "Mural",
    mediumKo: "벽화",
    
    primaryCategories: ["portrait", "event"],
    subcategories: ["portrait-group-7plus", "event-religious"],
    secondaryCategories: ["mixed-portrait-food", "still-life-food", "urban-interior"],
    
    prompt: `in the style of The Last Supper by Leonardo da Vinci,
      perfect linear perspective with vanishing point,
      dramatic moment captured in Renaissance style,
      symmetrical balanced composition,
      group portrait with expressive gestures,
      architectural interior setting,
      table with food and vessels`,
    
    keywords: ["linear perspective", "dramatic moment", "symmetrical", "group portrait"]
  },

  "leonardo-ermine": {
    id: "leonardo-ermine",
    
    artist: "Leonardo da Vinci",
    artistKo: "레오나르도 다 빈치",
    work: "Lady with an Ermine",
    workKo: "담비를 안은 여인",
    year: "1489-1491",
    medium: "Oil on panel",
    mediumKo: "패널에 유채",
    
    primaryCategories: ["portrait", "animal"],
    subcategories: ["portrait-upper-body", "animal-pet"],
    secondaryCategories: ["mixed-portrait-animal"],
    
    prompt: `in the style of Lady with an Ermine by Leonardo da Vinci,
      elegant turning pose with graceful movement,
      detailed animal companion held tenderly,
      sfumato soft edges,
      Renaissance portrait with psychological depth,
      intimate bond between subject and animal`,
    
    keywords: ["elegant pose", "animal companion", "turning pose", "detailed"]
  },

  // ========================================
  // Michelangelo (2개)
  // ========================================

  "michelangelo-adam": {
    id: "michelangelo-adam",
    
    artist: "Michelangelo",
    artistKo: "미켈란젤로",
    work: "The Creation of Adam",
    workKo: "천지창조",
    year: "1508-1512",
    medium: "Fresco",
    mediumKo: "천장 프레스코화",
    
    primaryCategories: ["portrait", "event"],
    subcategories: ["portrait-small-group", "event-religious"],
    secondaryCategories: ["daily-life-exercise"],
    
    prompt: `in the style of The Creation of Adam by Michelangelo,
      sculptural muscular forms with anatomical perfection,
      heroic proportions and monumental scale,
      dynamic reaching pose full of energy,
      Renaissance fresco masterpiece,
      powerful divine moment,
      athletic physique rendered with Renaissance mastery`,
    
    keywords: ["sculptural", "muscular", "heroic proportions", "monumental"]
  },

  "michelangelo-judgment": {
    id: "michelangelo-judgment",
    
    artist: "Michelangelo",
    artistKo: "미켈란젤로",
    work: "The Last Judgment",
    workKo: "최후의 심판",
    year: "1536-1541",
    medium: "Fresco",
    mediumKo: "벽화 프레스코",
    
    primaryCategories: ["portrait", "event"],
    subcategories: ["portrait-group-7plus", "event-religious"],
    secondaryCategories: [],
    
    prompt: `in the style of The Last Judgment by Michelangelo,
      dramatic turbulent composition with hundreds of figures,
      muscular athletic bodies in violent motion,
      intense emotional expressions of fear and awe,
      Renaissance fresco of epic scale,
      powerful divine judgment scene,
      swirling dynamic arrangement`,
    
    keywords: ["dramatic", "muscular", "intense emotion", "turbulent"]
  },

  // ========================================
  // Raphael (2개)
  // ========================================

  "raphael-athens": {
    id: "raphael-athens",
    
    artist: "Raphael",
    artistKo: "라파엘로",
    work: "The School of Athens",
    workKo: "아테네 학당",
    year: "1509-1511",
    medium: "Fresco",
    mediumKo: "벽화 프레스코",
    
    primaryCategories: ["portrait", "urban", "event"],
    subcategories: ["portrait-group-7plus", "urban-architecture", "event"],
    secondaryCategories: ["mixed-portrait-architecture", "daily-life-work"],
    
    prompt: `in the style of The School of Athens by Raphael,
      perfectly harmonious balanced composition,
      classical architecture with grand arches and columns,
      serene philosophical atmosphere,
      Renaissance fresco masterpiece,
      group of scholars in thoughtful discussion,
      ideal proportions and symmetry`,
    
    keywords: ["harmonious", "balanced", "classical architecture", "serene"]
  },

  "raphael-madonna": {
    id: "raphael-madonna",
    
    artist: "Raphael",
    artistKo: "라파엘로",
    work: "Madonna della Seggiola",
    workKo: "의자의 성모",
    year: "1513-1514",
    medium: "Oil on panel",
    mediumKo: "패널에 유채",
    
    primaryCategories: ["portrait"],
    subcategories: ["portrait-small-group"],
    secondaryCategories: [],
    
    prompt: `in the style of Madonna della Seggiola by Raphael,
      circular tondo composition,
      intimate maternal warmth and tenderness,
      gentle loving expressions,
      Renaissance portrait masterpiece,
      soft harmonious colors,
      perfect balance of mother and children`,
    
    keywords: ["circular composition", "intimate", "maternal warmth", "gentle"]
  },

  // ========================================
  // Botticelli (2개)
  // ========================================

  "botticelli-venus": {
    id: "botticelli-venus",
    
    artist: "Sandro Botticelli",
    artistKo: "산드로 보티첼리",
    work: "The Birth of Venus",
    workKo: "비너스의 탄생",
    year: "1484-1486",
    medium: "Tempera on canvas",
    mediumKo: "캔버스에 템페라",
    
    primaryCategories: ["portrait", "nature"],
    subcategories: ["portrait-full-body", "nature-sea"],
    secondaryCategories: ["mixed-portrait-landscape"],
    
    prompt: `in the style of The Birth of Venus by Botticelli,
      flowing graceful lines and elegant contours,
      poetic dreamlike atmosphere,
      Renaissance tempera masterpiece,
      gentle rhythmic movement,
      delicate beauty emerging from sea,
      soft pastel colors and golden highlights`,
    
    keywords: ["flowing lines", "graceful", "elegant contours", "poetic"]
  },

  "botticelli-primavera": {
    id: "botticelli-primavera",
    
    artist: "Sandro Botticelli",
    artistKo: "산드로 보티첼리",
    work: "Primavera",
    workKo: "프리마베라",
    year: "1477-1482",
    medium: "Tempera on panel",
    mediumKo: "패널에 템페라",
    
    primaryCategories: ["portrait", "nature", "event"],
    subcategories: ["portrait-group-4-6", "nature-forest", "event-festival"],
    secondaryCategories: ["still-life-flowers"],
    
    prompt: `in the style of Primavera by Botticelli,
      enchanted spring garden with abundant flowers,
      dancing graceful figures in rhythmic composition,
      Renaissance tempera masterpiece,
      over 500 species of botanical details,
      poetic allegorical scene,
      flowing delicate brushwork`,
    
    keywords: ["spring garden", "abundant flowers", "dancing figures", "enchanted"]
  },

  // ========================================
  // Titian (2개)
  // ========================================

  "titian-venus": {
    id: "titian-venus",
    
    artist: "Titian",
    artistKo: "티치아노",
    work: "Venus of Urbino",
    workKo: "우르비노의 비너스",
    year: "1538",
    medium: "Oil on canvas",
    mediumKo: "캔버스에 유채",
    
    primaryCategories: ["portrait", "urban"],
    subcategories: ["portrait-full-body", "urban-interior"],
    secondaryCategories: ["daily-life-rest"],
    
    prompt: `in the style of Venus of Urbino by Titian,
      rich Venetian colors with warm golden tones,
      luxurious opulent interior setting,
      Renaissance oil painting masterpiece,
      sensual beauty in repose,
      sumptuous fabrics and textures,
      masterful use of light and shadow`,
    
    keywords: ["Venetian colors", "warm golden tones", "luxurious", "opulent"]
  },

  "titian-glove": {
    id: "titian-glove",
    
    artist: "Titian",
    artistKo: "티치아노",
    work: "Man with a Glove",
    workKo: "장갑을 낀 남자",
    year: "1520-1523",
    medium: "Oil on canvas",
    mediumKo: "캔버스에 유채",
    
    primaryCategories: ["portrait"],
    subcategories: ["portrait-closeup"],
    secondaryCategories: [],
    
    prompt: `in the style of Man with a Glove by Titian,
      psychological depth and inner contemplation,
      Venetian color palette with rich tones,
      aristocratic dignified presence,
      Renaissance portrait masterpiece,
      subtle modeling of facial features,
      elegant refined atmosphere`,
    
    keywords: ["psychological depth", "Venetian colors", "aristocratic", "dignified"]
  }
};

/**
 * 카테고리별 작품 검색
 */
export function getRenaissanceByCategory(category) {
  return Object.values(renaissanceArtworks).filter(
    artwork => artwork.primaryCategories.includes(category)
  );
}

/**
 * 소카테고리별 작품 검색
 */
export function getRenaissanceBySubcategory(subcategory) {
  return Object.values(renaissanceArtworks).filter(
    artwork => artwork.subcategories.includes(subcategory)
  );
}

/**
 * 최적 작품 찾기
 */
export function findBestRenaissanceArtwork(category, subcategory = null) {
  const artworks = Object.values(renaissanceArtworks);
  
  // 소카테고리 매칭 우선
  if (subcategory) {
    // 1차: subcategories에서 정확히 매칭
    const exactMatch = artworks.find(
      artwork => artwork.subcategories.includes(subcategory)
    );
    if (exactMatch) return exactMatch;
    
    // 2차: secondaryCategories에서 매칭
    const secondaryMatch = artworks.find(
      artwork => artwork.secondaryCategories.includes(subcategory)
    );
    if (secondaryMatch) return secondaryMatch;
  }
  
  // 주 카테고리 매칭
  const primaryMatches = artworks.filter(
    artwork => artwork.primaryCategories.includes(category)
  );
  
  // 주 카테고리에서 매칭되면 랜덤 선택
  if (primaryMatches.length > 0) {
    return primaryMatches[Math.floor(Math.random() * primaryMatches.length)];
  }
  
  // 부 카테고리에서도 검색
  const secondaryMatches = artworks.filter(
    artwork => artwork.secondaryCategories.includes(category)
  );
  
  // 부 카테고리에서 매칭되면 랜덤 선택
  if (secondaryMatches.length > 0) {
    return secondaryMatches[Math.floor(Math.random() * secondaryMatches.length)];
  }
  
  return null;
}

/**
 * 카테고리 커버리지 통계
 */
export function getRenaissanceCoverage() {
  const coverage = {
    "portrait": 0,
    "nature": 0,
    "urban": 0,
    "still-life": 0,
    "animal": 0,
    "daily-life": 0,
    "event": 0,
    "mixed": 0
  };
  
  Object.values(renaissanceArtworks).forEach(artwork => {
    // primaryCategories 카운트
    artwork.primaryCategories.forEach(cat => {
      if (coverage[cat] !== undefined) {
        coverage[cat]++;
      }
    });
    
    // secondaryCategories도 카운트 (0.5로 계산)
    artwork.secondaryCategories.forEach(cat => {
      // mixed-portrait-food 같은 경우 "mixed"로 추출
      const mainCat = cat.split('-')[0];
      if (coverage[mainCat] !== undefined) {
        coverage[mainCat] += 0.5;
      }
    });
  });
  
  // 소수점 반올림
  Object.keys(coverage).forEach(key => {
    coverage[key] = Math.round(coverage[key]);
  });
  
  return coverage;
}
