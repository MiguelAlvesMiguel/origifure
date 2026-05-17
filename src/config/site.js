// ============================================================
//  ORIGIFURE — Configuração central editável
//  Altere aqui os contactos, moradas e textos principais.
// ============================================================

export const company = {
  name: 'Origifure Climatização',
  legalName: 'ORIGIFURE UNIP. LDA',
  since: 2007,
  phone: '229 742 204',
  phoneRaw: '229742204',
  phoneIntl: '+351229742204',
  whatsapp: '911 058 366',
  whatsappRaw: '351911058366',
  mobile2: '933 553 009',
  mobile2Raw: '351933553009',
  emails: ['origifure@gmail.com', 'origifure@sapo.pt'],
  hours: 'Segunda a sexta: 09:00 - 18:00',
  serviceArea: 'Portugal Continental',
  creditNumber: '741',
  addresses: {
    showroom: {
      label: 'Showroom / Escritório',
      street: 'Rua D. João IV, nº 477',
      zip: '4000-302 Porto',
      maps: 'https://www.google.com/maps?q=Rua+D.+Jo%C3%A3o+IV+477+4000-302+Porto&output=embed'
    },
    warehouse: {
      label: 'Escritório / Armazém',
      street: 'Rua Sousa Nogueira, 295',
      zip: '4405-606 Valadares, Vila Nova de Gaia',
      maps: 'https://www.google.com/maps?q=Rua+Sousa+Nogueira+295+4405-606+Valadares&output=embed'
    }
  }
}

export const whatsappLink = `https://wa.me/${company.whatsappRaw}?text=${encodeURIComponent(
  'Olá Origifure, gostaria de pedir um orçamento.'
)}`

// ---- Media (Pexels stock — livre de royalties) ----
export const media = {
  heroVideo: 'https://videos.pexels.com/video-files/8853532/8853532-hd_1920_1080_24fps.mp4',
  heroPoster: 'https://images.pexels.com/videos/8853532/pictures/preview-0.jpeg',
  acInstall: 'https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  acTech: 'https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  hvacInspect: 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  solarRoof: 'https://images.pexels.com/photos/27863809/pexels-photo-27863809.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  solarHouse: 'https://images.pexels.com/photos/32324897/pexels-photo-32324897.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  solarBuildings: 'https://images.pexels.com/photos/16427010/pexels-photo-16427010.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  heatPump: 'https://images.pexels.com/photos/20046691/pexels-photo-20046691.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  acWall: 'https://images.pexels.com/photos/20046692/pexels-photo-20046692.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  ventilation: 'https://images.pexels.com/photos/32032996/pexels-photo-32032996.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  building: 'https://images.pexels.com/photos/11360262/pexels-photo-11360262.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  buildingFaro: 'https://images.pexels.com/photos/18732717/pexels-photo-18732717.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  team: 'https://images.pexels.com/photos/8486896/pexels-photo-8486896.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  livingRoom: 'https://images.pexels.com/photos/5998169/pexels-photo-5998169.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  villa: 'https://images.pexels.com/photos/17174768/pexels-photo-17174768.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  office: 'https://images.pexels.com/photos/5511098/pexels-photo-5511098.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  officeAlt: 'https://images.pexels.com/photos/16254452/pexels-photo-16254452.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  renovation: 'https://images.pexels.com/photos/36054139/pexels-photo-36054139.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  // serviço (cartões com imagem)
  svcAr: 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=720',
  svcAquecimento: 'https://images.pexels.com/photos/20046689/pexels-photo-20046689.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=720',
  svcVent: 'https://images.pexels.com/photos/32032996/pexels-photo-32032996.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=720',
  svcFoto: 'https://images.pexels.com/photos/27863809/pexels-photo-27863809.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=720',
  svcSolar: 'https://images.pexels.com/photos/32324897/pexels-photo-32324897.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=720',
  svcAero: 'https://images.pexels.com/photos/20046691/pexels-photo-20046691.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=720',
  // hero card
  heroCard: 'https://images.pexels.com/photos/32588555/pexels-photo-32588555.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  // projetos extra
  hotel: 'https://images.pexels.com/photos/7942132/pexels-photo-7942132.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  clinica: 'https://images.pexels.com/photos/7108324/pexels-photo-7108324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1300',
  // avatares testemunhos (pexels fallback)
  avatar1: 'https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=160&h=160',
  avatar2: 'https://images.pexels.com/photos/36845948/pexels-photo-36845948.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=160&h=160',
  avatar3: 'https://images.pexels.com/photos/30269649/pexels-photo-30269649.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=160&h=160'
}

export const stats = [
  { value: 17, suffix: '+', label: 'Anos de experiência' },
  { value: 1500, suffix: '+', label: 'Projetos instalados' },
  { value: 6, suffix: '', label: 'Áreas de especialidade' },
  { value: 100, suffix: '%', label: 'Aconselhamento técnico' }
]

export const services = [
  {
    id: 'ar-condicionado',
    icon: 'snow',
    image: 'svcAr',
    title: 'Ar Condicionado',
    description: 'Sistemas eficientes para aquecimento e arrefecimento, dimensionados para cada espaço.',
    cta: 'Saber mais'
  },
  {
    id: 'aquecimento',
    icon: 'flame',
    image: 'svcAquecimento',
    title: 'Aquecimento',
    description: 'Soluções de aquecimento central, emissores térmicos, bombas de calor e sistemas de alto rendimento.',
    cta: 'Ver soluções'
  },
  {
    id: 'ventilacao',
    icon: 'wind',
    image: 'svcVent',
    title: 'Ventilação',
    description: 'Sistemas de ventilação para melhorar a qualidade do ar interior e o conforto dos espaços.',
    cta: 'Pedir avaliação'
  },
  {
    id: 'fotovoltaico',
    icon: 'sun',
    image: 'svcFoto',
    title: 'Fotovoltaico',
    description: 'Produção de energia solar para reduzir custos energéticos e aumentar a autonomia.',
    cta: 'Simular projeto'
  },
  {
    id: 'solar-termico',
    icon: 'droplet',
    image: 'svcSolar',
    title: 'Solar Térmico',
    description: 'Soluções solares para águas quentes sanitárias, com foco em eficiência e poupança.',
    cta: 'Pedir orçamento'
  },
  {
    id: 'aerotermia',
    icon: 'leaf',
    image: 'svcAero',
    title: 'Aerotermia',
    description: 'Bombas de calor e soluções aerotérmicas para climatização e águas quentes com elevada eficiência.',
    cta: 'Conhecer vantagens'
  }
]

export const benefits = [
  {
    icon: 'advice',
    title: 'Aconselhamento técnico',
    text: 'Cada projeto é analisado por profissionais especializados para encontrar a solução mais adequada.'
  },
  {
    icon: 'custom',
    title: 'Soluções à medida',
    text: 'Não vendemos uma solução genérica. Recomendamos o sistema certo para o espaço, consumo e objetivo do cliente.'
  },
  {
    icon: 'efficiency',
    title: 'Eficiência energética',
    text: 'Priorizamos equipamentos e sistemas que ajudam a reduzir consumos e melhorar o conforto.'
  },
  {
    icon: 'support',
    title: 'Instalação e acompanhamento',
    text: 'Acompanhamos o cliente desde o primeiro contacto até à instalação e apoio pós-venda.'
  }
]

export const featured = [
  {
    id: 'climatizacao',
    eyebrow: 'Climatização',
    title: 'Climatização eficiente para todo o ano',
    text: 'Instalamos sistemas de climatização para habitações, lojas, escritórios e outros espaços, garantindo conforto térmico em qualquer estação.',
    bullets: [
      'Ar condicionado mono-split e multi-split',
      'Soluções para aquecimento e arrefecimento',
      'Equipamentos eficientes e silenciosos',
      'Instalação profissional'
    ],
    cta: 'Quero climatizar o meu espaço',
    image: 'acWall'
  },
  {
    id: 'energias-renovaveis',
    eyebrow: 'Energias Renováveis',
    title: 'Energia solar e soluções renováveis',
    text: 'Reduza a dependência da rede elétrica e aumente a eficiência energética do seu imóvel com sistemas solares e soluções integradas.',
    bullets: [
      'Painéis fotovoltaicos',
      'Solar térmico',
      'Bombas de calor',
      'Sistemas integrados de energia'
    ],
    cta: 'Pedir estudo energético',
    image: 'solarBuildings'
  },
  {
    id: 'aerotermia',
    eyebrow: 'Aerotermia',
    title: 'Aerotermia para maior poupança e conforto',
    text: 'As bombas de calor permitem aquecimento, arrefecimento e águas quentes sanitárias com elevada eficiência energética.',
    bullets: [
      'Substituição de caldeiras antigas',
      'Soluções para moradias e apartamentos',
      'Águas quentes sanitárias',
      'Menor consumo energético'
    ],
    cta: 'Falar com técnico',
    image: 'heatPump'
  },
  {
    id: 'administracao',
    eyebrow: 'Administração',
    title: 'Administração de condomínios e propriedades',
    text: 'Além das soluções técnicas, a Origifure presta serviços relacionados com administração de condomínios e propriedades.',
    bullets: [
      'Gestão de condomínios',
      'Apoio a propriedades',
      'Coordenação de serviços técnicos'
    ],
    cta: 'Solicitar contacto',
    image: 'building'
  }
]

export const processSteps = [
  { n: 1, title: 'Pedido de contacto', text: 'O cliente envia o pedido através do formulário, telefone ou WhatsApp.' },
  { n: 2, title: 'Análise técnica', text: 'A equipa avalia o tipo de espaço, necessidades, consumo e objetivos.' },
  { n: 3, title: 'Proposta à medida', text: 'É apresentada uma solução adequada ao projeto, com orçamento claro.' },
  { n: 4, title: 'Instalação e acompanhamento', text: 'A Origifure trata da instalação e acompanha o cliente após a execução.' }
]

export const projects = [
  { title: 'Habitações', text: 'Conforto térmico e eficiência energética para casas de família.', image: 'livingRoom' },
  { title: 'Moradias', text: 'Climatização e aerotermia dimensionadas para moradias unifamiliares.', image: 'villa' },
  { title: 'Apartamentos', text: 'Soluções compactas e silenciosas adaptadas a apartamentos.', image: 'building' },
  { title: 'Lojas e escritórios', text: 'Ambientes profissionais com clima controlado e ar de qualidade.', image: 'office' },
  { title: 'Condomínios', text: 'Coordenação técnica e gestão de soluções partilhadas.', image: 'buildingFaro' },
  { title: 'Pequenas empresas', text: 'Equipamentos eficientes que reduzem custos operacionais.', image: 'officeAlt' },
  { title: 'Reabilitação e renovação de edifícios', text: 'Integração de sistemas modernos em edifícios renovados.', image: 'renovation' },
  { title: 'Hotéis e alojamentos', text: 'Soluções de climatização e ventilação para espaços de hospitalidade.', image: 'hotel' },
  { title: 'Clínicas e estabelecimentos de saúde', text: 'Qualidade do ar e controlo de temperatura em ambientes de saúde.', image: 'clinica' }
]

export const testimonials = [
  {
    text: 'Adquiri a compra e instalação de Painéis Fotovoltaicos e Sistema de Ar Condicionado há cerca de 8 meses. Atendimento de excelência antes e pós venda. Aquando da instalação recorri aos Fundos Ambiental com o excelente apoio do Sr. Lemos. Empresa e pessoas de excelência! Sugiro sem qq hesitação.',
    name: 'Victor Rodrigues',
    role: 'Fotovoltaicos & AC',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXqPSu7kBbYL9cO989SOjzIxq-kfEV5CZ9qxt50JmPSzzcQcJqwsg=s96-c',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNPem9mTGRBEAE!2m1!1s0x0:0x89d387d7cbf52673!3m1!1s2@1:CIHM0ogKEICAgICOzofLdA%7C%7C?hl=en'
  },
  {
    text: 'I recently had an air conditioning system installed by Origifure, and I couldn\'t be happier! The team was highly professional, efficient, and completed the installation with great attention to detail. They left my place spotless. Highly recommend!',
    name: 'Agnieszka Zarębska',
    role: 'AC Installation',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIAmO7-KYDUW87dsMukzazb0dfkD6USaw3ZTx2BP0WxT4jT8w=s96-c',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTURBdUxxS09BEAE!2m1!1s0x0:0x89d387d7cbf52673!3m1!1s2@1:CIHM0ogKEICAgMDAuLqKOA%7C%7C?hl=en'
  },
  {
    text: 'A empresa Origifure, que já à alguns anos me vem prestando serviços de climatização sempre com excelente profissionalismo, mais uma vez assim o fez ao instalar dois A/C na casa da minha Mãe. Obrigado Sr. Jorge! Super recomendo 👌',
    name: 'Francisco Leão',
    role: 'Cliente fiel · Climatização',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVwhd9T4MK9AszBhrxoBWibqY5vRG4_TY6tDHTaDz6pnG0TJNOv=s96-c',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VNcWt4cDIxaXB1N0dREAE!2m1!1s0x0:0x89d387d7cbf52673!3m1!1s2@1:CIHM0ogKEMqkxp21ipu7GQ%7C%7C?hl=en'
  },
  {
    text: 'Experiência na instalação de dois equipamentos de AC, painéis solares e termo acumulador. Excelente profissional em termos de conhecimento técnico, qualidade do equipamento e execução técnica.',
    name: 'Eduardo Cardoso',
    role: 'AC, Solar & Termoacumulador',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVXNexDWnjFfrbeE-bHouNiV6HTRszFhq2Dl1DuyieHOM6fyFm1=s96-c',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2paR1IwVnhiM2M1TVY5VWFXSnJTbmRvTnpObVduYxAB!2m1!1s0x0:0x89d387d7cbf52673!3m1!1s2@1:CAIQACodChtycF9oOjZGR0Vxb3c5MV9UaWJrSndoNzNmWnc%7C%7C?hl=en'
  },
  {
    text: 'Recentemente instalei um ar condicionado no meu apartamento em Gaia e recorri à Origifure. Técnicos altamente especializados realizando um trabalho de excelência, nada é feito ao acaso. Muito satisfeito!',
    name: 'Albertino Portela',
    role: 'AC residencial, Gaia',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjU7P97nSsY8sQR1gFsJDMWeuMy3Q_B0u2GhgT3BeOtbl8YkDbDw2w=s96-c',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTURBbFlTY2J3EAE!2m1!1s0x0:0x89d387d7cbf52673!3m1!1s2@1:CIHM0ogKEICAgMDAlYScbw%7C%7C?hl=en'
  },
  {
    text: 'Uma excelente empresa. Profissionais do início ao fim do processo. O Sr. Jorge Lemos é um ótimo profissional que cumpre as datas de execução da obra.',
    name: 'Rui Dias',
    role: 'Cliente particular · Climatização',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVZQn4ZgkONH0PDMrgzfzPJOqh7ug4arxxmsJe1nPTZRykL_sp_Sw=s96-c',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTURBM1AzSDJRRRAB!2m1!1s0x0:0x89d387d7cbf52673!3m1!1s2@1:CIHM0ogKEICAgMDA3P3H2QE%7C%7C?hl=en'
  },
  {
    text: 'Rápido e tudo conforme o combinado, sempre disponíveis para qualquer esclarecimento e muito rápidos na ajuda para tratar do processo com o fundo ambiental. Um grande obrigado a todos!',
    name: 'Virgílio Tojal',
    role: 'Fundo Ambiental · Climatização',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXkCpLcL4Y5z2n0KFbEJ14xRbaxOvzNpS3i6eZfLA2MMu6gKDNy=s96-c',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTURBaGFTRWxRRRAB!2m1!1s0x0:0x89d387d7cbf52673!3m1!1s2@1:CIHM0ogKEICAgMDAhaSElQE%7C%7C?hl=en'
  },
  {
    text: 'Atendimento fantástico! Sempre prontos para resolver qualquer questão e com disponibilidade para ajudar, nomeadamente na candidatura ao Apoio do Fundo Ambiental.',
    name: 'Nuno Correia da Silva',
    role: 'Apoio FA · Climatização',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWEeEias52Lpgi2rftXQnpP0AhZeqVI0qdTD2c8WPurXytccTcoSg=s96-c',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VOT0pvc3ZQdDVQMlZnEAE!2m1!1s0x0:0x89d387d7cbf52673!3m1!1s2@1:CIHM0ogKENOJosvPt5P2Vg%7C%7C?hl=en'
  },
  {
    text: 'Mesmo numa altura de muita procura por instalação de AC, deram rápida resposta! Excelente serviço, recomendo!',
    name: 'Ana Moura',
    role: 'AC residencial',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIeSlvnfADM7zDqrNgcS4XNskzg3b822hiU-cGaKsGZ_Rzg8A=s96-c',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pkbGExQnBRbUZ6YVhZMFpGOVJaVzFOVEhscGRGRRAB!2m1!1s0x0:0x89d387d7cbf52673!3m1!1s2@1:CAIQACodChtycF9oOjdla1BpQmFzaXY0ZF9RZW1NTHlpdFE%7C%7C?hl=en'
  },
  {
    text: 'Excelente e eficaz, uma óptima escolha para aquisição e colocação de Ar Condicionado.',
    name: 'Rui Marcelino Lopes Dias',
    role: 'AC residencial',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVI3jE-dMOGz8RkEvvXxfMnzXJaVlELjBGzwsu9n7A7HdDjJ-8liA=s96-c',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTUR3Mi1TbVR3EAE!2m1!1s0x0:0x89d387d7cbf52673!3m1!1s2@1:CIHM0ogKEICAgMDw2-SmTw%7C%7C?hl=en'
  },
  {
    text: 'Super profissionais, e ajudaram bastante na resolução dos problemas.',
    name: 'Pedro Azevedo',
    role: 'Climatização',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJAqwdyRio6pHouxm7SdQVTu0U0FkLIRgw5MTTOcrIYDq2Kqw=s96-c',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTUNRbkplQXVBRRAB!2m1!1s0x0:0x89d387d7cbf52673!3m1!1s2@1:CIHM0ogKEICAgMCQnJeAuAE%7C%7C?hl=en'
  },
  {
    text: 'Empresa idónea e responsável. Trabalhos de qualidade. Resolvem.',
    name: 'Amilcar Esteves',
    role: 'Climatização',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUwl3LdmngOtLge2GwFxHkVdIRm4DxVZ-G6AjnuhkSWxjXfTO8A=s96-c',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTURBX0lqQmpBRRAB!2m1!1s0x0:0x89d387d7cbf52673!3m1!1s2@1:CIHM0ogKEICAgMDA_IjBjAE%7C%7C?hl=en'
  },
  {
    text: 'Magnífica como sempre!',
    name: 'Carlos Azevedo',
    role: 'Cliente fiel',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocLlsbeYfsPIlE2FlA6T7NdXAAqGSkkx0puGu8f5zWsoDA-wIQ=s96-c',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTUNZdVpHR2dRRRAB!2m1!1s0x0:0x89d387d7cbf52673!3m1!1s2@1:CIHM0ogKEICAgMCYuZGGgQE%7C%7C?hl=en'
  },
  {
    text: 'Serviço profissional e atencioso. Recomendo.',
    name: 'Pedro Batista',
    role: 'Climatização',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUdkOp64UYHydRecl5m1efZirgKzA7CAikRJbWSjj_03XOfTmD0=s96-c',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21wSFZrTm5WVU53YzI1cVdVUnpTMlpwTWtWdllrRRAB!2m1!1s0x0:0x89d387d7cbf52673!3m1!1s2@1:CAIQACodChtycF9oOmpHVkNnVUNwc25qWURzS2ZpMkVvYkE%7C%7C?hl=en'
  }
]

export const faqs = [
  {
    q: 'Fazem instalações fora do Porto?',
    a: 'Sim. A Origifure realiza instalações em Portugal Continental.'
  },
  {
    q: 'O orçamento é gratuito?',
    a: 'Sim. Pode pedir um orçamento sem compromisso através do formulário, telefone ou WhatsApp.'
  },
  {
    q: 'Trabalham com ar condicionado e bombas de calor?',
    a: 'Sim. A Origifure trabalha com soluções de climatização, aquecimento, ar condicionado, aerotermia e bombas de calor.'
  },
  {
    q: 'Também instalam painéis solares?',
    a: 'Sim. A empresa trabalha com sistemas fotovoltaicos, solar térmico e outras soluções de energia renovável.'
  },
  {
    q: 'Posso pedir financiamento?',
    a: 'Pode solicitar informação. A Origifure atua como intermediário de crédito a título acessório, sujeito às condições e entidades aplicáveis.'
  },
  {
    q: 'Têm atendimento presencial?',
    a: 'Sim. O showroom/escritório fica na Rua D. João IV, nº 477, 4000-302 Porto.'
  }
]

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Energias Renováveis', href: '#energias-renovaveis' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Financiamento', href: '#financiamento' },
  { label: 'Contactos', href: '#contactos' }
]
