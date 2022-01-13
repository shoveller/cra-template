module.exports = {
  '**/*.{js,jsx,ts,tsx,json}': [
    // 타입 체크
    () => 'tsc --skipLibCheck --noEmit',
    // 코딩 컨벤션 체크
    () => 'npm run lint',
    // 코드 포맷팅
    () => 'npm run prettier',
  ],
  '**/*.{js,jsx,json}': ['npm run prettier'],
}
