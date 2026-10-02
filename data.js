/*
 * JS20 FUTSAL CUP — annual data file
 * Update this file each year; the UI reads only window.JS20_DATA.
 */
window.JS20_DATA = {
  activeEdition: 2026,
  editions: {
    2026: {
      year: 2026,
      dateLabel: '2026년 10월 17일',
      dateISO: '2026-10-17',
      kickoff: '미정',
      venue: '장소 추후 공개',
      phase: 'pre', // pre | live | post
      tagline: '다시 모여, 다시 뛴다.',
      teams: [
        { id: 'green', name: '그린팀', short: 'GREEN', score: null },
        { id: 'white', name: '화이트팀', short: 'WHITE', score: null }
      ],
      players: [],
      awards: {
        champion: null,
        goldenBoot: null,
        assistKing: null,
        mvp: null,
        goldenGlove: null
      },
      sponsor: {
        name: '신선포도농원',
        brand: 'FRESH PODO',
        url: 'https://m.smartstore.naver.com/fresh_podo'
      }
    }
  }
};
