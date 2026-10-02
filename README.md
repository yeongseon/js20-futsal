# JS20 FUTSAL CUP

장성고등학교 20회 졸업생 연례 풋살대회 공식(?) 사이트.

- **2026 Matchday:** 2026-10-17
- **Format:** 2 teams · 1 match
- **Pre-match:** D-Day, team recommendation, squad reveal
- **Post-match:** champion, Golden Boot, Assist King, MVP
- **Partner:** FRESH PODO / 신선포도농원
- **Hosting:** GitHub Pages

## Annual update

대부분의 연도별 변경은 `data.js`에서 관리합니다.

```js
window.JS20_DATA = {
  activeEdition: 2026,
  editions: {
    2026: { /* date, teams, players, awards ... */ }
  }
}
```

다음 해에는 기존 기록을 보존한 채 새 edition을 추가하고 `activeEdition`만 변경합니다.

## Design

FIFA/국제 축구대회의 정보 구조와 경기일 UX를 패러디한 비공식 동문 행사 사이트입니다. FIFA 또는 장성고등학교의 공식 사이트가 아닙니다.

## Local preview

정적 파일이므로 간단한 HTTP 서버로 확인할 수 있습니다.

```bash
python -m http.server 8000
```

Then open http://localhost:8000
