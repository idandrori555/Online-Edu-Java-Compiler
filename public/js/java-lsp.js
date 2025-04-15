// Java Language Server Configuration
function initializeJavaLanguageServer() {
    // Register Java language features
    monaco.languages.registerCompletionItemProvider('java', {
        provideCompletionItems: function(model, position) {
            const word = model.getWordUntilPosition(position);
            const range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };

            // Basic Java keywords and requested classes
            const suggestions = [
                // Keywords
                { label: 'public', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'public' },
                { label: 'private', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'private' },
                { label: 'protected', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'protected' },
                { label: 'class', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'class' },
                { label: 'interface', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'interface' },
                { label: 'extends', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'extends' },
                { label: 'implements', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'implements' },
                { label: 'static', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'static' },
                { label: 'void', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'void' },
                { label: 'int', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'int' },
                { label: 'String', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'String' },
                { label: 'boolean', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'boolean' },
                { label: 'return', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'return' },
                { label: 'if', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'if' },
                { label: 'else', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'else' },
                { label: 'for', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'for' },
                { label: 'while', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'while' },
                { label: 'try', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'try' },
                { label: 'catch', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'catch' },
                { label: 'throw', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'throw' },
                { label: 'new', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'new' },
                { label: 'this', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'this' },
                { label: 'super', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'super' },
                { label: 'import', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'import' },
                { label: 'package', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'package' },

                // Requested classes
                { label: 'BinNode', kind: monaco.languages.CompletionItemKind.Class, insertText: 'BinNode' },
                { label: 'List', kind: monaco.languages.CompletionItemKind.Class, insertText: 'List' },
                { label: 'Node', kind: monaco.languages.CompletionItemKind.Class, insertText: 'Node' },
                { label: 'Queue', kind: monaco.languages.CompletionItemKind.Class, insertText: 'Queue' },
                { label: 'Stack', kind: monaco.languages.CompletionItemKind.Class, insertText: 'Stack' },

                // Snippets
                { 
                    label: 'syso', 
                    kind: monaco.languages.CompletionItemKind.Snippet, 
                    insertText: 'System.out.println(${1:});',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    documentation: 'System.out.println() with cursor inside brackets'
                },
            ];

            return {
                suggestions: suggestions.map(suggestion => ({
                    ...suggestion,
                    range: range
                }))
            };
        }
    });

    // Register hover provider
    monaco.languages.registerHoverProvider('java', {
        provideHover: function(model, position) {
            const word = model.getWordAtPosition(position);
            if (!word) return null;

            // Basic documentation for requested Java elements
            const documentation = {
                'BinNode': 'A binary tree node class that contains a data element and references to left and right children.',
                'List': 'A generic list interface that represents a collection of elements in a specific order.',
                'Node': 'A basic node class that contains a data element and a reference to the next node.',
                'Queue': 'A collection designed for holding elements prior to processing. Provides FIFO (First-In-First-Out) operations.',
                'Stack': 'A collection that provides LIFO (Last-In-First-Out) operations. Elements are added and removed from the top.'
            };

            if (documentation[word.word]) {
                return {
                    contents: [{ value: documentation[word.word] }]
                };
            }

            return null;
        }
    });
} 