import '@tiptap/core';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    latexBlock: {
      insertLatexBlock: (attributes: { latex: string }) => ReturnType;
    };
  }
}