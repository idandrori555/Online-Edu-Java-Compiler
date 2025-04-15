document.addEventListener('DOMContentLoaded', () => {
    const resizeHandle = document.querySelector('.resize-handle');
    const bottomPanel = document.querySelector('.bottom-panel');
    let isResizing = false;
    let startY;
    let startHeight;

    resizeHandle.addEventListener('mousedown', (e) => {
        isResizing = true;
        startY = e.clientY;
        startHeight = bottomPanel.offsetHeight;
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    });

    function handleMouseMove(e) {
        if (!isResizing) return;
        
        const deltaY = startY - e.clientY;
        const newHeight = Math.min(Math.max(startHeight + deltaY, 100), window.innerHeight * 0.8);
        bottomPanel.style.height = `${newHeight}px`;
    }

    function handleMouseUp() {
        isResizing = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }
}); 