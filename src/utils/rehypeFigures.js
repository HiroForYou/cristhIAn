// Rehype plugin for blog posts:
// - a paragraph holding a single image becomes a <figure>, with the image's
//   alt text reused as its visible <figcaption>;
// - tables get a scroll wrapper so wide ones don't blow out the page on phones.
const isBlankText = node => node.type === 'text' && !node.value.trim();

function transform(parent) {
  if (!parent.children) return;
  parent.children = parent.children.map(node => {
    if (node.type !== 'element') return node;

    if (node.tagName === 'p') {
      const content = node.children.filter(child => !isBlankText(child));
      const [img] = content;
      if (content.length === 1 && img.type === 'element' && img.tagName === 'img') {
        const caption = img.properties?.alt;
        return {
          type: 'element',
          tagName: 'figure',
          properties: {},
          children: caption
            ? [
                img,
                {
                  type: 'element',
                  tagName: 'figcaption',
                  properties: {},
                  children: [{ type: 'text', value: caption }],
                },
              ]
            : [img],
        };
      }
    }

    if (node.tagName === 'table') {
      return {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-wrap'] },
        children: [node],
      };
    }

    transform(node);
    return node;
  });
}

export function rehypeFigures() {
  return tree => transform(tree);
}
