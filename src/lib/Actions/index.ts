import type { Action } from 'svelte/action';

interface RippleOptions {
  color?: string;
  centered?: boolean;
}

export const Ripple: Action<HTMLElement, RippleOptions> = (node, options = {}) => {
  const { color = 'currentColor', centered = false } = options;

  function createRipple(event: MouseEvent) {
    const rect = node.getBoundingClientRect();
    const ripple = document.createElement('div');
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = color;
    ripple.style.opacity = '0.2';
    ripple.style.transform = 'scale(0)';
    ripple.style.transition = 'transform 0.6s, opacity 0.6s';

    if (centered) {
      ripple.style.left = `${(rect.width - diameter) / 2}px`;
      ripple.style.top = `${(rect.height - diameter) / 2}px`;
    } else {
      ripple.style.left = `${event.clientX - rect.left - radius}px`;
      ripple.style.top = `${event.clientY - rect.top - radius}px`;
    }

    node.appendChild(ripple);

    requestAnimationFrame(() => {
      ripple.style.transform = 'scale(1)';
    });

    setTimeout(() => {
      ripple.style.opacity = '0';
      setTimeout(() => ripple.remove(), 600);
    }, 600);
  }

  node.addEventListener('click', createRipple);

  return {
    destroy() {
      node.removeEventListener('click', createRipple);
    },
    update(newOptions: RippleOptions) {
      Object.assign(options, newOptions);
    }
  };
}; 