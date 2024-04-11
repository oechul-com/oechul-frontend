import { createGlobalStyle } from 'styled-components';

export const BottomSheetModal = createGlobalStyle`
  :root {
    --rsbs-backdrop-bg: rgba(0, 0, 0, 0.5); // 기존 0.6
  }

  [data-rsbs-overlay] {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  [data-rsbs-header] {
    display: none;
  }
`;
