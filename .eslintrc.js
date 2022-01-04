module.exports = {
  // eslint 파서를 지정
  parser: '@typescript-eslint/parser',
  // 기반이 되는 rule
  extends: [
    'react-app',
    'react-app/jest',
  ],
  // 플러그인 목록
  plugins: ['@typescript-eslint', 'functional'],
  // 전역 변수를 다루는 방법을 설정한다
  // https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
  env: {
    es2021: true,
    browser: true,
    jest: true,
    node: true
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        // hook은 반드시 react 함수 안에서 호출해야 한다
        'react-hooks/rules-of-hooks': ['error'], // Checks rules of Hooks
        // hook의 dep array는 반드시 지켜야 한다
        'react-hooks/exhaustive-deps': ['error'], // Checks effect dependencies
        // var는 사용할 수 없다
        'no-var': ['error'],
        // let은 사용할 수 없다
        'functional/no-let': ['error'],
        // 객체와 배열은 immutable이다.
        'functional/immutable-data': ['error'],
        // 조건부 분기문은 사용할 수 없다
        'functional/no-conditional-statement': ['error'],
        // 반복문은 사용할 수 없다
        'functional/no-loop-statement': ['error'],
        // rest parameter 사용을 제한한다
        'functional/functional-parameters': ['error', {
          allowRestParameter: false,
          allowArgumentsKeyword: false,
          enforceParameterCount: false
        }],
        // 명시적으로 any를 사용할 수 없다
        '@typescript-eslint/no-explicit-any': ['error'],
        // 선언한 변수는 반드시 사용해야 한다
        '@typescript-eslint/no-unused-vars': ['error'],
        // 숫자와 문자열에 + 연산자를 사용할 수 없다
        '@typescript-eslint/restrict-plus-operands': ['error'],
        // 대괄호 연산자를 연속해서 호출할 수 없다
        '@typescript-eslint/no-unsafe-member-access': ['error'],
        // this의 참조를 변수에 할당할 수 없다
        '@typescript-eslint/no-this-alias': ['error']
      }
    }
  ]
}
