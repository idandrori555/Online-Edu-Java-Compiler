// Keyboard shortcuts configuration
window.setupKeyboardShortcuts = function(editor) {
    // Add Ctrl+S shortcut for compiling
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, function() {
        // Call the global compile function
        window.compile();
    });

    // Add Alt+Up/Down for moving lines
    editor.addCommand(monaco.KeyMod.Alt | monaco.KeyCode.UpArrow, function() {
        const action = editor.getAction('editor.action.moveLinesUpAction');
        if (action) {
            action.run();
        }
    });

    editor.addCommand(monaco.KeyMod.Alt | monaco.KeyCode.DownArrow, function() {
        const action = editor.getAction('editor.action.moveLinesDownAction');
        if (action) {
            action.run();
        }
    });

    // Add Ctrl+/ for toggling comments
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Slash, function() {
        const selection = editor.getSelection();
        if (!selection) return;

        const model = editor.getModel();
        const startLine = selection.startLineNumber;
        const endLine = selection.endLineNumber;

        // Get all lines in the selection
        const lines = [];
        for (let i = startLine; i <= endLine; i++) {
            lines.push(model.getLineContent(i));
        }

        // Check if all lines are commented
        const allCommented = lines.every(line => line.trim().startsWith('//'));

        // Toggle comments
        const editOperations = [];
        for (let i = startLine; i <= endLine; i++) {
            const line = model.getLineContent(i);
            const trimmedLine = line.trim();
            
            if (allCommented) {
                // Remove comment
                if (trimmedLine.startsWith('//')) {
                    editOperations.push({
                        range: new monaco.Range(i, line.indexOf('//') + 1, i, line.indexOf('//') + 3),
                        text: ''
                    });
                }
            } else {
                // Add comment
                if (!trimmedLine.startsWith('//')) {
                    editOperations.push({
                        range: new monaco.Range(i, 1, i, 1),
                        text: '//'
                    });
                }
            }
        }

        if (editOperations.length > 0) {
            model.pushEditOperations([], editOperations, []);
        }
    });
} 