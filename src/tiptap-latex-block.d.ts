import '@tiptap/core';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    insertLatexBlock: (attributes: { latex: string }) => ReturnType;
  }
} 