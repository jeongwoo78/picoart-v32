// PicoArt v32 - Art Movements 10 (Practical Selection)
// v32: 미술사조 10개 (교육적 완성도 + 시각적 차별성 + 실용성)
//
// 미술사조 10개 (시간순):
//   1. 고대 그리스-로마 (BC 800~AD 400)
//   2. 비잔틴·이슬람 (4~15세기)
//   3. 르네상스 (1400~1600)
//   4. 바로크 (1600~1750)
//   5. 로코코 (1720~1780)
//   6. 낭만주의 (1800~1850)
//   7. 사실주의 (1840~1870)
//   8. 인상주의 (1860~1890)
//   9. 후기인상주의 (1880~1910)
//  10. 표현주의 (1905~1920)
//
// 거장 6명 (시간순 + 생사연도):
//   1. 반 고흐 (1853-1890, 후기인상주의)
//   2. 클림트 (1862-1918, 아르누보)
//   3. 마티스 (1869-1954, 야수파)
//   4. 뭉크 (1863-1944, 표현주의)
//   5. 피카소 (1881-1973, 입체주의)
//   6. 달리 (1904-1989, 초현실주의)
//
// ========================================
// Claude AI selects style (Minhwa/Pungsokdo/Gongbi/etc)
// FLUX renders with selected style
// ========================================

// v33: 사조별 AI 선택 프롬프트 (직접 포함)
// Import 방식은 Vercel 서버리스 환경에서 불안정하므로 직접 포함

// 고대 그리스-로마 프롬프트
const ancientPrompt = `Analyze this photo and select the BEST Ancient Greco-Roman art style based on OVERALL MOOD.

You must choose ONE of these FOUR styles:

Style 1: Greek Vase Painting (그리스 항아리화, BC 800-300)
- Best mood: Mythological, heroic, classical, profile-oriented
- Best for: profile views, animals, mythological scenes, silhouettes, side-facing subjects
- Characteristics: black or red figure style, clear outlines, flat two-dimensional, narrative scenes
- Signature feeling: "Heroic mythology captured in timeless profile"

Style 2: Pompeii Fresco (폼페이 프레스코, BC 100 - AD 79)
- Best mood: Lively, intimate, everyday, dramatic
- Best for: portraits, people in action, indoor scenes, dramatic moments, facial expressions
- Characteristics: soft naturalistic colors (reds/ochres/greens), three-dimensional depth, lively expressions
- Signature feeling: "Vivid everyday life frozen in time"

Style 3: Pompeii Garden Painting (폼페이 정원화, BC 1st century)
- Best mood: Peaceful, natural, idyllic, pastoral
- Best for: landscapes, nature, plants, flowers, birds, gardens, outdoor scenes
- Characteristics: lush greenery, birds and fruits, panoramic nature, peaceful garden atmosphere
- Signature feeling: "Serene nature and garden paradise"

Style 4: Roman Mosaic (로마 모자이크, BC 200 - AD 400)
- Best mood: Formal, monumental, decorative, eternal
- Best for: group photos, formal compositions, ceremonial scenes, decorative patterns
- Characteristics: small tile (tessera) texture, decorative borders, formal balanced composition, permanent grandeur
- Signature feeling: "Eternal grandeur in stone"

SELECTION STRATEGY (분위기 우선):

1. IDENTIFY THE DOMINANT MOOD:
   - Mythological/heroic/profile → Greek Vase
   - Lively/dramatic/intimate → Pompeii Fresco
   - Peaceful/natural/pastoral → Pompeii Garden
   - Formal/monumental/ceremonial → Roman Mosaic

2. For COMPLEX photos:
   - Focus on the OVERALL ATMOSPHERE
   - Example: Person in garden → If peaceful nature dominates: Pompeii Garden
   - Example: Group in formal pose → If ceremonial feeling dominates: Roman Mosaic
   - Example: Dramatic facial expression → If lively emotion dominates: Pompeii Fresco

3. SUBJECT TYPE HINTS (but mood is priority):
   - Side profile or animal → consider Greek Vase
   - Face-forward portrait → consider Pompeii Fresco or Roman Mosaic
   - Nature/plants dominant → consider Pompeii Garden
   - Multiple people formally arranged → consider Roman Mosaic

CRITICAL INSTRUCTION FOR FACIAL PRESERVATION:
When photo contains person(s), your generated prompt MUST include:
"portraying the SAME PERSON from the photo while capturing their distinctive facial features"

This ensures the person remains recognizable while only the painting style changes.
The person's ethnicity, facial structure, and identity must be preserved.

Return ONLY valid JSON (no markdown):
{
  "analysis": "brief description of photo's dominant mood and main subject",
  "selected_artist": "Greek Vase Painting" or "Pompeii Fresco" or "Pompeii Garden Painting" or "Roman Mosaic",
  "selected_style": "greek_vase" or "pompeii_fresco" or "pompeii_garden" or "roman_mosaic",
  "reason": "why this style's signature feeling matches the photo's mood",
  "prompt": "Ancient [style name], [distinctive characteristics emphasizing the mood], portraying the SAME PERSON from the photo while capturing their distinctive facial features, depicting the subject while preserving original composition"
}

Keep it concise and accurate.`;

// 비잔틴·이슬람 프롬프트
const byzantineIslamicPrompt = `Analyze this photo and select the BEST Byzantine-Islamic art style based on OVERALL MOOD.

You must choose ONE of these FIVE styles:

Style 1: Byzantine Icon (비잔틴 성상화, 4-15th century)
- Best mood: Sacred, eternal, frontal, spiritual
- Best for: frontal portraits, face-centered, direct gaze, spiritual subjects
- Characteristics: gold background, large expressive eyes, flat frontal composition, divine presence
- Signature feeling: "Sacred window to heaven"

Style 2: Byzantine Mosaic (비잔틴 모자이크, 5-14th century)
- Best mood: Majestic, glorious, monumental, celestial
- Best for: groups, landscapes with architecture, grand scenes, ceremonial compositions
- Characteristics: golden glass tessera, light-reflecting shimmer, monumental scale, heavenly grandeur
- Signature feeling: "Glorious golden radiance of heaven"

Style 3: Persian Miniature (페르시아 세밀화, 13-17th century)
- Best mood: Epic, narrative, heroic, courtly
- Best for: people in action, dramatic scenes, battles, court life, storytelling moments
- Characteristics: intricate details, rich colors, decorative borders, narrative compositions, Persian epic style
- Signature feeling: "Epic tales told in exquisite detail"

Style 4: Mughal Miniature (무굴 세밀화, 16-18th century)
- Best mood: Natural, peaceful, paradise-like, observational
- Best for: flowers, birds, animals, gardens, nature close-ups, botanical subjects
- Characteristics: naturalistic observation, delicate details, symmetrical gardens, paradise imagery, life celebration
- Signature feeling: "Earthly paradise of natural beauty"

Style 5: Islamic Geometric (이슬람 기하학 문양, 8th century onward)
- Best mood: Abstract, mathematical, infinite, ordered
- Best for: patterns, symmetrical compositions, architectural subjects, decorative scenes
- Characteristics: geometric patterns, perfect symmetry, infinite tessellation, arabesque motifs, mathematical beauty
- Signature feeling: "Divine infinity in geometric order"

SELECTION STRATEGY (분위기 우선):

1. IDENTIFY THE DOMINANT MOOD:
   - Sacred/spiritual/frontal gaze → Byzantine Icon
   - Majestic/grand/monumental → Byzantine Mosaic
   - Epic/narrative/dramatic → Persian Miniature
   - Natural/peaceful/botanical → Mughal Miniature
   - Abstract/patterned/geometric → Islamic Geometric

2. For COMPLEX photos:
   - Focus on the PRIMARY ATMOSPHERE
   - Example: Portrait with religious feeling → Byzantine Icon
   - Example: Group in palace → If narrative: Persian / If majestic: Byzantine Mosaic
   - Example: Flowers in garden → Mughal Miniature
   - Example: Building with patterns → Islamic Geometric

3. SUBJECT TYPE HINTS (but mood is priority):
   - Single frontal portrait → consider Byzantine Icon
   - Grand scene with multiple elements → consider Byzantine Mosaic
   - People in dramatic action → consider Persian Miniature
   - Natural subjects (flowers/birds/animals) → consider Mughal Miniature
   - Symmetrical/patterned composition → consider Islamic Geometric

4. CULTURAL DISTINCTION:
   - Byzantine (1-2): Christian religious, gold-focused, Western influence
   - Persian (3): Islamic Persian, narrative epic, court culture
   - Mughal (4): Islamic Indian, nature-focused, garden paradise
   - Islamic Geometric (5): Pan-Islamic, abstract, architectural

CRITICAL INSTRUCTION FOR FACIAL PRESERVATION:
When photo contains person(s), your generated prompt MUST include:
"portraying the SAME PERSON from the photo while capturing their distinctive facial features"

This ensures the person remains recognizable while only the painting style changes.
The person's ethnicity, facial structure, and identity must be preserved.

Return ONLY valid JSON (no markdown):
{
  "analysis": "brief description of photo's dominant mood and main subject",
  "selected_artist": "Byzantine Icon" or "Byzantine Mosaic" or "Persian Miniature" or "Mughal Miniature" or "Islamic Geometric",
  "selected_style": "byzantine_icon" or "byzantine_mosaic" or "persian_miniature" or "mughal_miniature" or "islamic_geometric",
  "reason": "why this style's signature feeling matches the photo's mood",
  "prompt": "[Style name], [distinctive characteristics emphasizing the mood], portraying the SAME PERSON from the photo while capturing their distinctive facial features, depicting the subject while preserving original composition"
}

Keep it concise and accurate.`;

// 르네상스 프롬프트
const renaissancePrompt = `Analyze this photo and select the BEST Renaissance master based on OVERALL MOOD.

You must choose ONE of these FOUR masters:

Master 1: Leonardo da Vinci (레오나르도 다 빈치, 1452-1519)
- Best mood: Mysterious, contemplative, intellectual, serene
- Best for: portraits with enigmatic expressions, subtle emotions, intellectual subjects
- Characteristics: EXTREME sfumato with soft smoky blurred edges, NO visible hard outlines anywhere, atmospheric haze, gentle transitions between light and shadow, mysterious enigmatic smile
- FLUX keywords: "sfumato technique, soft blurred edges with NO sharp outlines, smoky atmospheric haze, gentle gradual transitions, mysterious smile, muted earth tones"
- Signature feeling: "Mysterious beauty through perfect science"

Master 2: Michelangelo (미켈란젤로, 1475-1564)
- Best mood: Powerful, dramatic, heroic, monumental
- Best for: muscular bodies, dramatic poses, heroic figures, powerful expressions
- Characteristics: sculptural three-dimensional forms, dramatic chiaroscuro lighting, powerfully defined anatomy with visible muscles, heroic monumental scale, contour emphasizing volume
- FLUX keywords: "sculptural forms with strong contours, dramatic chiaroscuro, powerfully defined muscular anatomy, heroic monumental composition, three-dimensional volume"
- Signature feeling: "Divine power in human form"

Master 3: Titian (티치아노, 1488-1576)
- Best mood: Sensual, warm, luxurious, vibrant
- Best for: rich colors, luxurious fabrics, sensual beauty, warm atmospheric scenes
- Characteristics: rich Venetian colors (deep reds, golden yellows, luminous blues), warm golden tones, visible loose expressive brushwork, layered glazes creating luminous depth, sensual beauty
- FLUX keywords: "Venetian color palette with rich reds and golden tones, visible expressive brushstrokes, luminous glazed layers, warm glowing atmosphere, sensual beauty"
- Signature feeling: "Sensual beauty in golden warmth"

Master 4: Botticelli (보티첼리, 1445-1510)
- Best mood: Graceful, ethereal, poetic, idealized
- Best for: graceful figures, flowing lines, idealized beauty, poetic atmosphere
- Characteristics: flowing linear rhythms with clear elegant contour lines, idealized graceful elongated forms, delicate refined beauty, lyrical harmonious composition, pale luminous skin tones, flowing hair and drapery
- FLUX keywords: "clear elegant contour lines, flowing linear rhythms, idealized graceful elongated proportions, delicate pale luminous colors, flowing drapery and hair, lyrical composition"
- Signature feeling: "Ethereal grace and poetic beauty"

SELECTION STRATEGY (분위기 우선):

1. IDENTIFY THE DOMINANT MOOD:
   - Mysterious/intellectual → Leonardo
   - Powerful/heroic → Michelangelo
   - Sensual/luxurious → Titian
   - Graceful/ethereal → Botticelli

2. For COMPLEX photos:
   - Focus on the PRIMARY EMOTIONAL ATMOSPHERE
   - Example: Strong facial features → If powerful: Michelangelo / If mysterious: Leonardo
   - Example: Flowing fabrics → If sensual: Titian / If graceful: Botticelli

3. SUBJECT HINTS (but mood is priority):
   - Subtle mysterious smile → Leonardo
   - Muscular or powerful pose → Michelangelo
   - Rich colors and fabrics → Titian
   - Graceful flowing lines → Botticelli

CRITICAL INSTRUCTION FOR FACIAL PRESERVATION:
When photo contains person(s), your generated prompt MUST include:
"portraying the SAME PERSON from the photo while capturing their distinctive facial features"

This ensures the person remains recognizable while only the painting style changes.
The person's ethnicity, facial structure, and identity must be preserved.

Return ONLY valid JSON (no markdown):
{
  "analysis": "brief description of photo's dominant mood and main subject",
  "selected_artist": "Leonardo da Vinci" or "Michelangelo" or "Titian" or "Botticelli",
  "selected_style": "leonardo" or "michelangelo" or "titian" or "botticelli",
  "reason": "why this master's signature feeling matches the photo's mood",
  "prompt": "Renaissance painting by [Master name], [USE THE SPECIFIC FLUX KEYWORDS FROM THAT MASTER'S DESCRIPTION], portraying the SAME PERSON from the photo while capturing their distinctive facial features, depicting the subject while preserving original composition"
}

CRITICAL: Your prompt MUST include the specific FLUX keywords for the selected master to ensure visual distinction.

Keep it concise and accurate.`;

// v34: 화가별 고정 템플릿 (100% 일관성 보장)
const renaissanceArtistTemplates = {
  "Leonardo da Vinci": "extreme sfumato technique with soft blurred edges and NO sharp outlines anywhere, smoky atmospheric haze with gentle gradual transitions, mysterious enigmatic expression, muted earth tones with subtle modeling, Leonardo da Vinci's scientific precision in anatomy",
  
  "Michelangelo": "sculptural three-dimensional forms with strong defined contours, dramatic chiaroscuro lighting, powerfully defined muscular anatomy with visible muscles and tendons, heroic monumental composition, Michelangelo's divine power in human form",
  
  "Titian": "rich Venetian color palette with deep reds and luminous golden yellows, visible loose expressive brushstrokes, luminous layered glazes creating depth, warm glowing atmosphere, Titian's sensual beauty in oil painting",
  
  "Botticelli": "clear elegant contour lines defining forms, flowing linear rhythms throughout composition, idealized graceful elongated proportions, delicate pale luminous skin tones, flowing drapery and hair with lyrical quality, Botticelli's ethereal Renaissance grace"
};

const baroqueArtistTemplates = {
  "Caravaggio": "extreme tenebrism with 75-85% of canvas in pitch black shadows, single dramatic spotlight from upper left corner, NO ambient fill light anywhere, theatrical chiaroscuro with stark contrast, raw gritty realism, Caravaggio's dramatic Baroque intensity",
  
  "Rembrandt": "warm golden glowing light emanating from within, soft atmospheric luminosity with gentle transitions, NO harsh shadows, warm amber and golden brown tones throughout, deep psychological insight visible in eyes and expression, Rembrandt's humanitarian warmth",
  
  "Rubens": "swirling diagonal dynamic composition, rich saturated warm colors with reds and golds, dynamic curved flowing forms suggesting movement, visible energetic expressive brushstrokes, abundant vitality and life force, full robust figures, Rubens' Baroque exuberance",
  
  "Velázquez": "elegant restrained composition with sophisticated atmospheric perspective, soft blended brushwork creating subtle tonal transitions, refined muted color palette with grays and silvers, dignified composed poses, spatial depth through atmosphere, Velázquez's courtly dignity"
};

// 바로크 프롬프트
const baroquePrompt = `Analyze this photo and select the BEST Baroque master based on OVERALL MOOD.

You must choose ONE of these FOUR masters:

Master 1: Caravaggio (카라바조, 1571-1610)
- Best mood: Dramatic, intense, theatrical, raw
- Best for: strong contrasts, dramatic lighting, intense emotions, raw realism
- Characteristics: EXTREME tenebrism with 70-80% of canvas in pitch black shadows, single theatrical spotlight from upper corner, NO ambient light, dramatic spotlight effect, gritty raw realism, strong directional light
- FLUX keywords: "extreme tenebrism, 80% pitch black shadows, single dramatic spotlight from upper left, NO ambient fill light, theatrical chiaroscuro, raw gritty realism, strong directional lighting"
- Signature feeling: "Raw drama in stark light and shadow"

Master 2: Rembrandt (렘브란트, 1606-1669)
- Best mood: Warm, introspective, contemplative, humanistic
- Best for: portraits, elderly subjects, quiet dignity, inner emotions, warm atmospheres
- Characteristics: warm golden glowing light from within, soft atmospheric luminosity, NO harsh shadows, gentle transitions, deep psychological insight through eyes and expression, warm amber and golden brown tones, gentle humanity
- FLUX keywords: "warm golden glowing light, soft atmospheric glow with gentle transitions, NO harsh shadows, warm amber and brown tones, psychological depth in eyes, soft luminous quality"
- Signature feeling: "Warm humanity and inner light"

Master 3: Rubens (루벤스, 1577-1640)
- Best mood: Dynamic, exuberant, celebratory, energetic
- Best for: movement, energy, full figures, celebrations, dynamic compositions
- Characteristics: swirling diagonal compositions, rich warm saturated colors (reds, golds, flesh tones), dynamic movement with curved flowing forms, abundant vitality, visible energetic brushwork, full-bodied robust figures
- FLUX keywords: "swirling diagonal composition, rich saturated warm colors, dynamic curved flowing forms, visible energetic brushstrokes, abundant vitality, full robust figures"
- Signature feeling: "Exuberant life force and dynamic energy"

Master 4: Velázquez (벨라스케스, 1599-1660)
- Best mood: Elegant, dignified, refined, sophisticated
- Best for: formal portraits, elegant poses, sophisticated compositions, dignified subjects
- Characteristics: elegant restraint with subtle tonal transitions, sophisticated atmospheric perspective, soft blended brushwork creating spatial depth, refined muted color palette (grays, silvers, muted tones), dignified composed poses
- FLUX keywords: "elegant restrained composition, sophisticated atmospheric perspective, soft blended subtle transitions, refined muted color palette with grays and silvers, dignified poses, spatial depth"
- Signature feeling: "Elegant dignity and sophisticated grace"

SELECTION STRATEGY (분위기 우선):

1. IDENTIFY THE DOMINANT MOOD:
   - Dramatic/intense → Caravaggio
   - Warm/contemplative → Rembrandt
   - Dynamic/energetic → Rubens
   - Elegant/refined → Velázquez

2. For COMPLEX photos:
   - Focus on the PRIMARY EMOTIONAL QUALITY
   - Example: Strong light/shadow → If theatrical: Caravaggio / If warm: Rembrandt
   - Example: Active pose → If exuberant: Rubens / If dignified: Velázquez

3. SUBJECT HINTS (but mood is priority):
   - Extreme contrast lighting → Caravaggio
   - Elderly or contemplative face → Rembrandt
   - Dynamic movement → Rubens
   - Formal elegant pose → Velázquez

CRITICAL INSTRUCTION FOR FACIAL PRESERVATION:
When photo contains person(s), your generated prompt MUST include:
"portraying the SAME PERSON from the photo while capturing their distinctive facial features"

This ensures the person remains recognizable while only the painting style changes.
The person's ethnicity, facial structure, and identity must be preserved.

Return ONLY valid JSON (no markdown):
{
  "analysis": "brief description of photo's dominant mood and main subject",
  "selected_artist": "Caravaggio" or "Rembrandt" or "Rubens" or "Velázquez",
  "selected_style": "caravaggio" or "rembrandt" or "rubens" or "velazquez",
  "reason": "why this master's signature feeling matches the photo's mood",
  "prompt": "Baroque painting by [Master name], [USE THE SPECIFIC FLUX KEYWORDS FROM THAT MASTER'S DESCRIPTION], portraying the SAME PERSON from the photo while capturing their distinctive facial features, depicting the subject while preserving original composition"
}

CRITICAL: Your prompt MUST include the specific FLUX keywords for the selected master to ensure visual distinction.

Keep it concise and accurate.`;

// Fallback 프롬프트 (AI 실패시 사용)
const fallbackPrompts = {
  ancient: {
    name: '고대 그리스-로마',
    prompt: 'ancient Greek and Roman classical painting style, idealized human forms, marble-like smooth rendering, heroic noble figures, classical drapery, temple architecture, serene dignified expressions, painted in ancient classical masterpiece quality'
  },
  
  byzantineIslamic: {
    name: '비잔틴·이슬람',
    prompt: 'Byzantine and Islamic art style, golden mosaic backgrounds, ornate geometric patterns, rich jewel-like colors, spiritual iconic forms, decorative arabesque motifs, sacred dignified atmosphere, painted in Byzantine-Islamic masterpiece quality'
  },
  
  renaissance: {
    name: '르네상스',
    prompt: 'Renaissance painting style, soft sfumato technique, harmonious balanced composition, warm golden Renaissance colors, detailed naturalistic rendering, gentle serene expressions, classical perspective, painted in Renaissance masterpiece quality'
  },
  
  baroque: {
    name: '바로크',
    prompt: 'Baroque painting style, dramatic chiaroscuro lighting, rich deep colors, dynamic diagonal composition, theatrical emotional atmosphere, strong contrast between light and shadow, painted in Baroque masterpiece quality'
  },
  
  rococo: {
    name: '로코코',
    prompt: 'Rococo painting style, light pastel colors, playful ornate decoration, soft delicate brushwork, romantic elegant atmosphere, graceful curved lines, whimsical charm, painted in Rococo masterpiece quality'
  },
  
  romanticism: {
    name: '낭만주의',
    prompt: 'Romantic painting style, dramatic emotional intensity, sublime natural beauty, vivid expressive colors, dynamic turbulent composition, passionate atmosphere, painted in Romantic masterpiece quality'
  },
  
  realism: {
    name: '사실주의',
    prompt: 'Realist painting style, honest unidealized depiction of everyday life, working class and peasant subjects, earthy natural colors, solid three-dimensional forms, direct observation of reality, social commentary, dignified portrayal of common people, painted in Realist masterpiece quality by Gustave Courbet or Jean-François Millet'
  },
  
  impressionism: {
    name: '인상주의',
    prompt: 'Impressionist painting style, visible short brushstrokes, pure unmixed colors, emphasis on natural light effects, outdoor plein-air atmosphere, capturing fleeting moments, painted in Impressionist masterpiece quality'
  },
  
  postImpressionism: {
    name: '후기인상주의',
    prompt: 'Post-Impressionist painting style, bold expressive colors, geometric structured forms, emotional symbolic content, innovative personal vision, painted in Post-Impressionist masterpiece quality'
  },
  
  expressionism: {
    name: '표현주의',
    prompt: 'Expressionist painting style, intense emotional colors, distorted exaggerated forms, psychological depth, dramatic angular composition, inner feelings externalized, painted in Expressionist masterpiece quality'
  },
  
  // ========================================
  // 거장 6명 (시간순 정렬 + 생사연도 + 사조)
  // ========================================
  
  van_gogh: {
    name: '반 고흐',
    artist: 'Vincent van Gogh (1853-1890)',
    movement: '후기인상주의 (Post-Impressionism)',
    prompt: 'painting by Vincent van Gogh, thick expressive swirling brushstrokes, vibrant intense emotional colors, dynamic energetic composition, passionate turbulent style'
  },
  
  klimt: {
    name: '클림트',
    artist: 'Gustav Klimt (1862-1918)',
    movement: '아르누보 (Art Nouveau)',
    prompt: 'painting by Gustav Klimt, golden ornamental patterns, Byzantine mosaic influence, decorative symbolic style, sensuous flowing forms, jewel-like colors, Art Nouveau elegance'
  },
  
  munch: {
    name: '뭉크',
    artist: 'Edvard Munch (1863-1944)',
    movement: '표현주의 (Expressionism)',
    prompt: 'painting by Edvard Munch, intense emotional psychological depth, symbolic expressive colors, haunting atmospheric mood, existential anxiety visualized'
  },
  
  matisse: {
    name: '마티스',
    artist: 'Henri Matisse (1869-1954)',
    movement: '야수파 (Fauvism)',
    prompt: 'painting by Henri Matisse, bold pure flat colors, simplified harmonious forms, decorative rhythmic patterns, joyful life-affirming atmosphere'
  },
  
  picasso: {
    name: '피카소',
    artist: 'Pablo Picasso (1881-1973)',
    movement: '입체주의 (Cubism)',
    prompt: 'Cubist painting by Pablo Picasso, geometric fragmented forms, multiple simultaneous perspectives, abstract analytical composition, monochromatic or limited palette'
  },
  
  dali: {
    name: '달리',
    artist: 'Salvador Dalí (1904-1989)',
    movement: '초현실주의 (Surrealism)',
    prompt: 'Surrealist painting by Salvador Dalí, dreamlike hyperrealistic details, melting distorted forms, bizarre juxtapositions, subconscious imagery, precise meticulous technique'
  },
  
  // ========================================
  // 동양화 - AI가 스타일 자동 선택
  // ========================================
  korean: {
    name: '한국 전통화',
    prompt: 'Korean traditional painting in authentic Joseon Dynasty style. CRITICAL INSTRUCTIONS: 1) GENDER PRESERVATION - carefully preserve exact gender and facial features from original photo (male stays male with masculine face, female stays female with feminine features), 2) Choose appropriate Korean style based on photo subject (Minhwa folk art for animals/flowers with bold outlines and bright Obangsaek colors, Pungsokdo genre painting for people/daily life with refined brushwork, Jingyeong landscape for nature/mountains with expressive ink), 3) Use Korean aesthetic sensibility. ABSOLUTELY NO Japanese hiragana (ひらがな) or katakana (カタカナ). This is PURE KOREAN ART, not Japanese ukiyo-e.'
  },
  
  chinese: {
    name: '중국 전통화',
    prompt: 'Chinese traditional painting in authentic classical style. CRITICAL INSTRUCTIONS: 1) GENDER PRESERVATION - carefully preserve exact gender and facial features from original photo (male stays male with masculine face, female stays female with feminine features), 2) Choose appropriate Chinese style based on photo subject (Shuimohua ink wash for landscapes/nature with monochrome gradations, Gongbi meticulous painting for people/portraits with fine detailed brushwork and rich colors, Huaniao bird-and-flower for animals/plants with precise naturalistic rendering), 3) Use Chinese aesthetic principles. ABSOLUTELY NO Japanese hiragana (ひらがな) or katakana (カタカナ). This is PURE CHINESE ART.'
  },
  
  japanese: {
    name: '일본 우키요에',
    prompt: 'Japanese Ukiyo-e woodblock print style with flat areas of bold solid colors, strong clear black outlines, completely flat two-dimensional composition, decorative patterns, stylized simplified forms, elegant refined Japanese aesthetic, painted in authentic Japanese ukiyo-e masterpiece quality, Japanese kana allowed, NO Chinese characters, pure Japanese style only'
  },
  
  masters: {
    name: '거장 화풍',
    prompt: 'Master artist painting style, exceptional technical skill, distinctive artistic vision, profound emotional depth, timeless masterpiece quality'
  },
  
  oriental: {
    name: '동양화',
    prompt: 'Traditional East Asian painting style, ink wash brushwork, minimalist composition, harmony with nature, philosophical contemplation, painted in classical Oriental masterpiece quality'
  }
};

// v29: 동양화 DB 제거됨 - selectOrientalArtwork 함수 불필요

// AI 화가 자동 선택 (타임아웃 포함)
async function selectArtistWithAI(imageBase64, selectedStyle, timeoutMs = 8000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    // 모든 카테고리 동일 로직: AI가 사진 분석 후 최적 세부 스타일 선택
    let promptText;
    let isCustomPrompt = false;  // 커스텀 프롬프트 사용 여부
    
    const categoryName = selectedStyle.name;
    const categoryType = selectedStyle.category;
    
    if (categoryType === 'masters') {
      // 거장: 사진에 가장 잘 맞는 시기/스타일 선택
      promptText = `Analyze this photo and select the BEST specific period or style from ${categoryName}'s works that matches this photo.

${categoryName} created works in various periods and styles. Analyze the photo and select which period/style would transform this photo most beautifully.

Instructions:
1. Analyze the photo: subject, mood, colors, composition, lighting, atmosphere
2. Consider ${categoryName}'s different periods and styles (early works, peak period, different techniques)
3. Match the photo's characteristics to the MOST SUITABLE period/style from ${categoryName}'s career
4. Generate a detailed FLUX prompt using that specific period's distinctive characteristics
5. IMPORTANT: Preserve the original subject - if it's a baby, keep it as a baby; if elderly, keep elderly

Return ONLY valid JSON (no markdown):
{
  "analysis": "brief photo analysis (mood, colors, subject)",
  "selected_artist": "${categoryName}",
  "selected_period": "specific period or style name (e.g. Blue Period, Arles Period, Golden Period)",
  "reason": "why THIS specific period of ${categoryName} matches this photo perfectly",
  "prompt": "painting by ${categoryName} in [specific period], [that period's distinctive techniques and colors], depicting the subject while preserving original features and age"
}

Keep it concise and accurate.`;
      
    } else if (categoryType === 'oriental') {
      // v29: DB는 제거했지만 Claude가 여전히 스타일 선택
      const styleId = selectedStyle.id;
      
      if (styleId === 'korean') {
        // 한국 - Claude가 3가지 스타일 중 선택
        promptText = `Analyze this photo and select the BEST Korean traditional painting style.

You must choose ONE of these THREE styles:

Style 1: Korean Minhwa Folk Painting (민화)
- Best for: animals (tiger, magpie, fish), flowers (peony), birds, simple subjects
- Characteristics: THICK BLACK OUTLINES around all shapes, BRIGHT primary colors (Obangsaek: red/blue/yellow/white/black), completely FLAT naive composition, childlike playful aesthetic
- When: Photo has animals, flowers, or needs cheerful colorful treatment

Style 2: Korean Pungsokdo Genre Painting (풍속도)
- Best for: people, portraits, daily life, couples, festivals, human activities
- Characteristics: Refined delicate brushwork, figures in hanbok, soft pastel colors, narrative storytelling of Joseon life, elegant composition
- When: Photo has people, faces, human subjects

Style 3: Korean Jingyeong Landscape (진경산수)
- Best for: mountains, nature, rocks, landscapes, scenery
- Characteristics: Bold expressive brushwork, dramatic angular forms, monochrome ink with strong contrasts, REAL Korean scenery (not idealized Chinese mountains)
- When: Photo has natural landscapes, mountains, rocks

Analyze the photo and choose the MOST suitable style.

CRITICAL INSTRUCTIONS FOR PROMPT GENERATION:
1. GENDER PRESERVATION (MANDATORY IN PROMPT):
   - FIRST identify if photo has person(s) and their gender
   - If MALE in photo → prompt MUST start with "CRITICAL GENDER RULE: This photo shows MALE person, ABSOLUTELY PRESERVE MASCULINE FEATURES - strong jaw, masculine face, male body structure, DO NOT feminize, DO NOT make female-looking face, KEEP MALE GENDER EXACTLY."
   - If FEMALE in photo → prompt MUST start with "CRITICAL GENDER RULE: This photo shows FEMALE person, ABSOLUTELY PRESERVE FEMININE FEATURES - soft face, feminine features, female body structure, DO NOT masculinize, KEEP FEMALE GENDER EXACTLY."
   - This gender instruction MUST be the FIRST thing in your generated prompt before any style description

2. JAPANESE TEXT PROHIBITION (CRITICAL):
   - ABSOLUTELY NO Japanese hiragana (ひらがな) - NEVER ALLOWED
   - ABSOLUTELY NO Japanese katakana (カタカナ) - NEVER ALLOWED
   - Any Japanese text = COMPLETE FAILURE
   - This is KOREAN ART, not Japanese art

Return ONLY valid JSON (no markdown):
{
  "analysis": "brief photo description including gender if person present (1 sentence)",
  "selected_artist": "Korean Minhwa" or "Korean Pungsokdo" or "Korean Jingyeong Landscape",
  "selected_style": "minhwa" or "pungsokdo" or "landscape",
  "reason": "why this style fits (1 sentence)",
  "prompt": "Complete FLUX prompt starting with GENDER RULE if person present, then 'Korean [style name]...' with all characteristics. MUST include 'ABSOLUTELY NO Japanese hiragana (ひらがな) or katakana (カタカナ), this is PURE KOREAN ART' at the end."
}

Keep it concise and accurate.`;
      }
      
      if (styleId === 'chinese') {
        // 중국 - Claude가 3가지 스타일 중 선택
        promptText = `Analyze this photo and select the BEST Chinese traditional painting style.

You must choose ONE of these THREE styles:

Style 1: Chinese Ink Wash Painting (水墨畫 Shuimohua)
- Best for: landscapes, mountains, nature, trees, contemplative subjects, simple compositions
- Characteristics: Monochrome black ink with gradations (deep black to light grey), soft flowing brushstrokes, minimalist composition with elegant empty space, misty atmosphere
- When: Photo has landscapes, nature, or needs meditative serene treatment

Style 2: Chinese Gongbi Meticulous Painting (工筆畫)
- Best for: portraits, people, detailed subjects, colorful compositions
- Characteristics: Extremely fine detailed brushwork, delicate precise lines, rich mineral pigments and brilliant colors, ornate decorative patterns, imperial court quality
- When: Photo has people, faces, or needs detailed colorful treatment

Style 3: Chinese Huaniao Bird-and-Flower (花鳥畫)
- Best for: birds, flowers, animals, plants, natural subjects
- Characteristics: Detailed naturalistic rendering, precise meticulous brushwork for feathers and petals, delicate soft colors, harmonious composition
- When: Photo has birds, flowers, animals, or plants

Analyze the photo and choose the MOST suitable style.

CRITICAL INSTRUCTIONS FOR PROMPT GENERATION:
1. GENDER PRESERVATION (MANDATORY IN PROMPT):
   - FIRST identify if photo has person(s) and their gender
   - If MALE in photo → prompt MUST start with "CRITICAL GENDER RULE: This photo shows MALE person, ABSOLUTELY PRESERVE MASCULINE FEATURES - strong jaw, masculine face, male body structure, DO NOT feminize, DO NOT make female-looking face, KEEP MALE GENDER EXACTLY."
   - If FEMALE in photo → prompt MUST start with "CRITICAL GENDER RULE: This photo shows FEMALE person, ABSOLUTELY PRESERVE FEMININE FEATURES - soft face, feminine features, female body structure, DO NOT masculinize, KEEP FEMALE GENDER EXACTLY."
   - This gender instruction MUST be the FIRST thing in your generated prompt before any style description

2. JAPANESE TEXT PROHIBITION (CRITICAL):
   - ABSOLUTELY NO Japanese hiragana (ひらがな) - NEVER ALLOWED
   - ABSOLUTELY NO Japanese katakana (カタカナ) - NEVER ALLOWED
   - Any Japanese text = COMPLETE FAILURE
   - This is CHINESE ART, not Japanese art

Return ONLY valid JSON (no markdown):
{
  "analysis": "brief photo description including gender if person present (1 sentence)",
  "selected_artist": "Chinese Ink Wash" or "Chinese Gongbi" or "Chinese Huaniao",
  "selected_style": "ink_wash" or "gongbi" or "huaniao",
  "reason": "why this style fits (1 sentence)",
  "prompt": "Complete FLUX prompt starting with GENDER RULE if person present, then 'Chinese [style name]...' with all characteristics. MUST include 'ABSOLUTELY NO Japanese hiragana (ひらがな) or katakana (カタカナ), this is PURE CHINESE ART' at the end."
}

Keep it concise and accurate.`;
      }
      
      if (styleId === 'japanese') {
        // 일본 - 우키요에 고정
        return {
          success: true,
          artist: '일본 우키요에',
          reason: 'Japanese traditional ukiyo-e style',
          prompt: fallbackPrompts.japanese.prompt,
          analysis: 'Japanese ukiyo-e style applied'
        };
      }
      
    } else {
      // v33: 미술사조별 맞춤 프롬프트 사용 (우리가 지정한 화가/스타일만 선택)
      const movementPrompts = {
        'ancient': ancientPrompt,
        'byzantineIslamic': byzantineIslamicPrompt,
        'renaissance': renaissancePrompt,
        'baroque': baroquePrompt,
        // 앞으로 추가될 사조들
        // 'rococo': rococoPrompt,
        // 'romanticism': romanticismPrompt,
        // 'realism': realismPrompt,
        // 'impressionism': impressionismPrompt,
        // 'postImpressionism': postImpressionismPrompt,
        // 'expressionism': expressionismPrompt
      };
      
      const movementKey = selectedStyle.id.replace('-movement', '');
      const customPrompt = movementPrompts[movementKey];
      
      if (customPrompt) {
        // v33: 우리가 만든 맞춤 프롬프트 사용
        console.log(`✅ Using custom prompt for ${categoryName}`);
        promptText = customPrompt;
        isCustomPrompt = true;
      } else {
        // Fallback: 아직 맞춤 프롬프트 없는 사조 (로코코, 낭만주의 등)
        console.log(`⚠️ No custom prompt for ${categoryName}, using generic`);
        promptText = `Analyze this photo and select the BEST artist from ${categoryName} period/style to transform it.

Instructions:
1. Analyze: subject, age, mood, composition, lighting
2. Select the MOST SUITABLE ${categoryName} artist for THIS specific photo
3. Generate a detailed prompt for FLUX Depth in that artist's style
4. IMPORTANT: Preserve the original subject - if it's a baby, keep it as a baby; if elderly, keep elderly

Return ONLY valid JSON (no markdown):
{
  "analysis": "brief photo description",
  "selected_artist": "Artist Full Name",
  "reason": "why this artist fits this photo",
  "prompt": "painting by [Artist], [artist's technique], [artist's characteristics], depicting the subject while preserving original features and age"
}

Keep it concise and accurate.`;
      }
    }
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',  // Claude Sonnet 4.5 (최신)
        max_tokens: 500,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: 'image/jpeg',
                data: imageBase64.split(',')[1]
              }
            },
            {
              type: 'text',
              text: promptText
            }
          ]
        }]
      })
    });
    
    clearTimeout(timeout);
    
    if (!response.ok) {
      throw new Error(`AI API error: ${response.status}`);
    }
    
    const data = await response.json();
    const text = data.content[0].text
      .replace(/```json\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();
    
    const result = JSON.parse(text);
    
    // 검증
    if (!result.prompt || !result.selected_artist) {
      throw new Error('Invalid AI response format');
    }
    
    return {
      success: true,
      artist: result.selected_artist,
      reason: result.reason,
      prompt: result.prompt,
      analysis: result.analysis,
      isCustomPrompt: isCustomPrompt
    };
    
  } catch (error) {
    clearTimeout(timeout);
    console.error('AI selection failed:', error.message);
    return { success: false, error: error.message };
  }
}

// 메인 핸들러
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image, selectedStyle } = req.body;

    // 디버깅 로그
    console.log('=== SDXL Transfer Debug ===');
    console.log('Has REPLICATE_API_KEY:', !!process.env.REPLICATE_API_KEY);
    console.log('Has ANTHROPIC_API_KEY:', !!process.env.ANTHROPIC_API_KEY);
    console.log('Has image:', !!image);
    console.log('Image length:', image ? image.length : 0);
    console.log('Image starts with:', image ? image.substring(0, 50) : 'N/A');
    console.log('Has selectedStyle:', !!selectedStyle);
    console.log('selectedStyle:', selectedStyle);

    if (!process.env.REPLICATE_API_KEY) {
      console.error('ERROR: REPLICATE_API_KEY not configured');
      return res.status(500).json({ error: 'Replicate API key not configured' });
    }

    if (!image || !selectedStyle) {
      console.error('ERROR: Missing image or selectedStyle');
      console.error('image exists:', !!image);
      console.error('selectedStyle:', JSON.stringify(selectedStyle, null, 2));
      return res.status(400).json({ error: 'Missing image or style' });
    }

    // selectedStyle 구조 검증
    if (!selectedStyle.name || !selectedStyle.category) {
      console.error('ERROR: Invalid selectedStyle structure');
      console.error('selectedStyle:', JSON.stringify(selectedStyle, null, 2));
      return res.status(400).json({ 
        error: 'Invalid style structure',
        details: 'Missing name or category'
      });
    }

    let finalPrompt;
    let selectedArtist;
    let selectionMethod;
    let selectionDetails = {};

    // v29: 모든 스타일이 동일하게 처리됨 (동양화 DB 제거)
    // 한국/중국/일본 모두 fallback 프롬프트 또는 AI 선택 사용
    
    if (selectedStyle.category === 'oriental' && selectedStyle.id === 'japanese') {
      // 일본 우키요에 (고정)
      console.log('Japanese Ukiyo-e - using fixed style');
      
      const fallback = fallbackPrompts.japanese;
      finalPrompt = fallback.prompt;
      selectedArtist = fallback.name;
      selectionMethod = 'oriental_fixed';
      selectionDetails = {
        style: 'japanese_ukiyoe'
      };
      
    } else if (process.env.ANTHROPIC_API_KEY) {
      console.log(`Trying AI artist selection for ${selectedStyle.name}...`);
      
      const aiResult = await selectArtistWithAI(
        image, 
        selectedStyle,  // ← selectedStyle 객체 전체 전달
        15000 // 15초 타임아웃 (Anthropic API 응답 대기)
      );
      
      if (aiResult.success) {
        // AI가 화가 선택 성공!
        selectedArtist = aiResult.artist;
        selectionMethod = aiResult.isCustomPrompt ? 'ai_custom_prompt' : 'ai_auto';
        selectionDetails = {
          analysis: aiResult.analysis,
          reason: aiResult.reason
        };
        console.log('✅ AI selected:', selectedArtist);
        
        // v35: 화가별 고정 템플릿 사용 (100% 일관성)
        let artistTemplate = null;
        
        // selectedStyle.id로 직접 확인 (category는 다양할 수 있음)
        if (selectedStyle.id === 'renaissance' || selectedStyle.id === 'renaissance-movement') {
          artistTemplate = renaissanceArtistTemplates[selectedArtist];
          if (artistTemplate) {
            console.log('✅ Using Renaissance template for:', selectedArtist);
          }
        } else if (selectedStyle.id === 'baroque' || selectedStyle.id === 'baroque-movement') {
          artistTemplate = baroqueArtistTemplates[selectedArtist];
          if (artistTemplate) {
            console.log('✅ Using Baroque template for:', selectedArtist);
          }
        }
        
        // 템플릿 사용 또는 AI 프롬프트 사용
        if (artistTemplate) {
          // 우리가 만든 완벽한 템플릿 사용
          finalPrompt = `painting by ${selectedArtist}, ${artistTemplate}, portraying the SAME PERSON from the photo while capturing their distinctive facial features, depicting the subject while preserving original composition and atmosphere`;
        } else {
          // 템플릿 없으면 AI 생성 프롬프트 사용 (다른 사조들)
          finalPrompt = aiResult.prompt;
        }
        
      } else {
        // AI 실패 → Fallback
        console.log('⚠️ AI failed, using fallback');
        
        // 거장/동양화는 id에서 키 추출, 미술사조는 category 사용
        let fallbackKey = selectedStyle.category;
        
        if (selectedStyle.category === 'masters') {
          // 'picasso-master' → 'picasso'
          fallbackKey = selectedStyle.id.replace('-master', '');
          
          // 특수 케이스: vangogh → van_gogh
          if (fallbackKey === 'vangogh') {
            fallbackKey = 'van_gogh';
          }
        } else if (selectedStyle.category === 'oriental') {
          // v29: 동양화는 간단하게 id 그대로 사용
          fallbackKey = selectedStyle.id;  // korean, chinese, japanese
        }
        
        console.log('Using fallback key:', fallbackKey);
        const fallback = fallbackPrompts[fallbackKey];
        
        if (!fallback) {
          console.error('ERROR: No fallback found for key:', fallbackKey);
          console.error('Available categories:', Object.keys(fallbackPrompts));
          throw new Error(`No fallback prompt for: ${fallbackKey}`);
        }
        
        finalPrompt = fallback.prompt;
        selectedArtist = fallback.name;
        selectionMethod = 'fallback';
        selectionDetails = {
          ai_error: aiResult.error
        };
      }
    } else {
      // ANTHROPIC_API_KEY 없음 → Fallback
      console.log('ℹ️ No AI key, using fallback');
      
      // 거장/동양화는 id에서 키 추출, 미술사조는 category 사용
      let fallbackKey = selectedStyle.category;
      
      if (selectedStyle.category === 'masters') {
        // 'picasso-master' → 'picasso'
        fallbackKey = selectedStyle.id.replace('-master', '');
        
        // 특수 케이스: vangogh → van_gogh
        if (fallbackKey === 'vangogh') {
          fallbackKey = 'van_gogh';
        }
      } else if (selectedStyle.category === 'oriental') {
        // v29: 동양화는 간단하게 id 그대로 사용
        fallbackKey = selectedStyle.id;  // korean, chinese, japanese
      }
      
      console.log('Using fallback key:', fallbackKey);
      const fallback = fallbackPrompts[fallbackKey];
      
      if (!fallback) {
        console.error('ERROR: No fallback found for key:', fallbackKey);
        console.error('Available categories:', Object.keys(fallbackPrompts));
        throw new Error(`No fallback prompt for: ${fallbackKey}`);
      }
      
      finalPrompt = fallback.prompt;
      selectedArtist = fallback.name;
      selectionMethod = 'fallback_no_key';
    }

    console.log('Final prompt:', finalPrompt);
    
    // FLUX Depth 변환 (최신 API 버전)
    const response = await fetch(
      'https://api.replicate.com/v1/models/black-forest-labs/flux-depth-dev/predictions',
      {
        method: 'POST',
        headers: {
          'Authorization': `Token ${process.env.REPLICATE_API_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'wait'
        },
        body: JSON.stringify({
          input: {
            control_image: image,
            prompt: finalPrompt,
            num_inference_steps: 24,       // 28→24 속도 최적화 (약 20% 빠름)
            guidance: 12,                   // 프롬프트 엄격 준수 (일본어/성별 보존)
            control_strength: 1.0,          // 구도 완벽 유지 (일관성 최대화)
            output_format: 'jpg',
            output_quality: 90
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('FLUX Depth error:', response.status, errorText);
      return res.status(response.status).json({ 
        error: `FLUX API error: ${response.status}`,
        details: errorText
      });
    }

    const data = await response.json();
    console.log('✅ FLUX Depth completed');
    
    // 결과에 선택 정보 포함
    res.status(200).json({
      ...data,
      selected_artist: selectedArtist,
      selection_method: selectionMethod,
      selection_details: selectionDetails
    });
    
  } catch (error) {
    console.error('Handler error:', error);
    res.status(500).json({ 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

/*
작동 방식:

시나리오 1: AI 성공 (95%)
─────────────────────────
사진: 아기
선택: 바로크

AI 분석 중... (3초)
✅ AI 선택: 루벤스
이유: "아기 그림 전문"
프롬프트: "Baroque by Rubens, cherubic baby..."

FLUX 변환... (30초)
결과: 루벤스 스타일 아기 ✅

시나리오 2: AI 실패 (5%)
─────────────────────────
사진: 아기
선택: 바로크

AI 분석 중... (타임아웃 또는 에러)
⚠️ Fallback 사용
프롬프트: "Baroque style, dramatic lighting..."

FLUX 변환... (30초)
결과: 바로크 스타일 아기 ✅ (화가명 없지만 작동)

시나리오 3: API 키 없음
─────────────────────────
ℹ️ AI 키 없음
Fallback 사용

FLUX 변환... (30초)
결과: 기본 스타일 ✅
*/
