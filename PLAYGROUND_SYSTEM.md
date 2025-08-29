# Interactive Code Playground System

## Overview

This document outlines the development of a comprehensive, multi-language interactive code playground system for educational and documentation purposes. The system transforms static markdown code blocks into interactive, executable code environments similar to CodePen or JSFiddle, but optimized for educational content.

## System Architecture

### Core Components

1. **Remark Plugin** (`src/mdx-plugins/remark-playground.ts`)
2. **React Playground Component** (`src/components/playground.tsx`)
3. **Backend API Endpoints** (configurable)

## Component Details

### 1. Remark Plugin - Language-Agnostic Transformer

The remark plugin automatically detects and transforms code blocks with specific patterns into interactive playground components.

#### Original Implementation (Java-only)

```typescript
// Detected patterns: "java play", "java-play", "java:play"
const PLAY_PATTERNS = new Set(["java play", "java-play", "java:play"]);
```

#### Enhanced Multi-Language Implementation

```typescript
// Language-specific patterns
const LANGUAGE_PATTERNS: Record<string, Set<string>> = {
  java: new Set(["java play", "java-play", "java:play"]),
  javascript: new Set([
    "js play",
    "javascript play",
    "js-play",
    "javascript-play",
  ]),
  python: new Set(["py play", "python play", "py-play", "python-play"]),
  typescript: new Set([
    "ts play",
    "typescript play",
    "ts-play",
    "typescript-play",
  ]),
  go: new Set(["go play", "golang play", "go-play"]),
  rust: new Set(["rust play", "rs play", "rust-play"]),
};
```

#### Configuration Options

```typescript
export interface PlaygroundPluginOptions {
  supportedLanguages?: string[];
  defaultLanguage?: string;
  componentName?: string;
  componentPath?: string;
}
```

#### Usage Examples

````markdown
<!-- Java playground -->

```java play
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```
````

<!-- Python playground -->

```python play
print("Hello from Python!")
```

<!-- JavaScript playground -->

```js play
console.log("Hello from JavaScript!");
```

````

### 2. React Code Playground Component - Interactive Code Environment

The playground component provides a sophisticated code editing and execution environment with the following features:

#### Core Features

##### **Dual-State Code Management**
- `displayCode`: The canonical/saved version of the code
- `editedCode`: In-progress edits (null when not editing)
- Seamless toggle between read-only and editable modes

##### **Syntax Highlighting**
- Runtime highlighting using Shiki library
- Dual theme support (light/dark)
- Performance optimizations:
  - Cached highlighters to avoid recreation
  - Debounced highlighting during editing (300ms)
  - Background color stripping with regex optimization
  - LRU cache for cleaned HTML results

##### **Code Execution System**
- Configurable execution endpoints
- Support for multiple HTTP methods
- Request/response transformation
- Streaming and JSON response support
- Abort control for running executions
- Status tracking with visual feedback

##### **User Interface**
- Action toolbar with Run, Edit, Save, Cancel, Copy buttons
- Visual feedback for loading states
- Collapsible output panel
- Error vs. output distinction
- Responsive design with Tailwind CSS

#### Configuration Interface

```typescript
export interface ExecutionResult {
  output?: string;
  error?: string;
  success: boolean;
}

export interface ExecutionConfig {
  endpoint?: string;
  method?: "GET" | "POST" | "PUT";
  headers?: Record<string, string>;
  transformRequest?: (code: string, language: string) => any;
  transformResponse?: (response: Response) => Promise<ExecutionResult>;
}

export interface PlaygroundTheme {
  container?: string;
  codeContainer?: string;
  toolbar?: string;
  outputContainer?: string;
  errorContainer?: string;
}

export type PlaygroundProps = {
  code: string;
  language?: string;
  children?: React.ReactNode;
  editable?: boolean;
  runnable?: boolean;
  showCopy?: boolean;
  height?: string | number;
  theme?: PlaygroundTheme;
  execution?: ExecutionConfig;
  onCodeChange?: (code: string) => void;
  onExecute?: (code: string, result: ExecutionResult) => void;
  customActions?: React.ReactNode;
};
````

#### Default Language Configurations

```typescript
const DEFAULT_EXECUTIONS: Record<string, ExecutionConfig> = {
  java: {
    endpoint: "/api/playground/java",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    transformRequest: (code: string) => ({ code }),
    transformResponse: async (response: Response): Promise<ExecutionResult> => {
      // Handle Java-specific response format
      const contentType = response.headers.get("content-type") || "";

      if (contentType.includes("application/json")) {
        const data = await response.json();
        const stdout = data?.stdout || data?.output || "";
        const stderr = data?.stderr || data?.error || "";

        if (stderr.trim()) {
          return { error: stderr, success: false };
        }
        return { output: stdout, success: true };
      }

      const text = await response.text();
      return { output: text, success: true };
    },
  },
  javascript: {
    endpoint: "/api/playground/javascript",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    transformRequest: (code: string) => ({ code }),
  },
  python: {
    endpoint: "/api/playground/python",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    transformRequest: (code: string) => ({ code }),
  },
};
```

## Usage Examples

### Basic Usage

```jsx
// Simple Java playground
<Playground code="public class Hello { ... }" />

// Multi-language support
<Playground
  code="print('Hello World')"
  language="python"
/>
```

### Advanced Configuration

```jsx
// Custom execution endpoint
<Playground
  code="console.log('Hello');"
  language="javascript"
  execution={{
    endpoint: "/api/custom-runner",
    method: "POST",
    headers: { Authorization: "Bearer token" },
    transformRequest: (code, lang) => ({
      script: code,
      language: lang,
      options: { timeout: 5000 },
    }),
    transformResponse: async (response) => {
      const data = await response.json();
      return {
        output: data.result,
        error: data.error,
        success: !data.error,
      };
    },
  }}
  onExecute={(code, result) => {
    console.log("Code executed:", code);
    console.log("Result:", result);
  }}
/>
```

### Customization Options

```jsx
// Read-only code display
<Playground
  code="const example = 42;"
  language="javascript"
  editable={false}
  runnable={false}
  showCopy={true}
/>

// Custom styling
<Playground
  code="print('Styled playground')"
  language="python"
  height="300px"
  theme={{
    container: "border-blue-500 bg-blue-50",
    codeContainer: "bg-neutral-900",
    outputContainer: "bg-green-900 text-green-100",
    errorContainer: "bg-red-900 text-red-100"
  }}
/>

// Custom toolbar actions
<Playground
  code="// Your code here"
  customActions={
    <button className="p-2 hover:bg-neutral-200">
      Custom Action
    </button>
  }
/>
```

## Integration Workflow

### 1. Content Author Workflow

````markdown
1. Write markdown with code blocks:
   ```java play
   public class Example {
       public static void main(String[] args) {
           System.out.println("Interactive Java code!");
       }
   }
   ```
````

2. Remark plugin automatically transforms to:
   <Playground code="public class Example..." language="java" />

3. Component renders with:
   - Syntax highlighting
   - Interactive toolbar
   - Execution capabilities

```

### 2. User Interaction Flow
```

1. User sees highlighted code (read-only)
2. Clicks "Run" → Code executes, output appears
3. Clicks "Edit" → Switches to textarea mode
4. Makes changes → Real-time syntax highlighting
5. Clicks "Save" → Updates display code
   OR "Cancel" → Reverts changes
6. Clicks "Copy" → Copies current code to clipboard

````

## Performance Optimizations

### Syntax Highlighting
- **Highlighter Caching**: Shiki highlighters cached at module level
- **Debounced Updates**: 300ms debounce on code changes during editing
- **Background Stripping**: Optimized regex patterns with caching
- **LRU Cache**: Prevents memory leaks with size-limited cache

### Code Execution
- **Request Cancellation**: Abort previous requests when new ones start
- **Controller Management**: Proper cleanup of fetch controllers
- **Response Streaming**: Support for both streaming and JSON responses

### Component Rendering
- **Memoized Calculations**: Trimmed code and configs memoized
- **Conditional Rendering**: Only render what's needed
- **Theme Switching**: Efficient light/dark theme handling

## Extension Points

### Adding New Languages
```typescript
// 1. Add language patterns to remark plugin
const LANGUAGE_PATTERNS = {
  // ... existing languages
  rust: new Set(["rust play", "rs play", "rust-play"]),
  go: new Set(["go play", "golang play", "go-play"]),
};

// 2. Add execution config
const DEFAULT_EXECUTIONS = {
  // ... existing configs
  rust: {
    endpoint: "/api/playground/rust",
    method: "POST",
    transformRequest: (code) => ({ code, edition: "2021" }),
  },
};
````

### Custom Execution Backends

```typescript
// Custom Docker-based execution
const dockerExecution: ExecutionConfig = {
  endpoint: "/api/docker-runner",
  method: "POST",
  headers: { "Content-Type": "application/json" },
  transformRequest: (code, language) => ({
    code,
    language,
    image: `${language}:latest`,
    timeout: 30000,
    memory: "128mb",
  }),
  transformResponse: async (response) => {
    const data = await response.json();
    return {
      output: data.stdout,
      error: data.stderr || data.error,
      success: data.exitCode === 0,
    };
  },
};
```

## Security Considerations

### Code Execution

- **Sandboxing**: All code should execute in isolated containers
- **Timeouts**: Implement execution time limits
- **Resource Limits**: Memory and CPU constraints
- **Input Validation**: Sanitize code before execution

### API Security

- **Rate Limiting**: Prevent abuse of execution endpoints
- **Authentication**: Optional user authentication for advanced features
- **CORS**: Proper cross-origin request handling

## Use Cases

### Educational Platforms

- Interactive coding tutorials
- Programming language documentation
- Algorithm demonstrations
- Code challenge platforms

### Documentation Sites

- API examples with live code
- Library usage demonstrations
- Quick prototyping environments
- Community code sharing

### Development Tools

- Code snippet testing
- Multi-language code comparison
- Collaborative coding sessions
- Interview coding platforms

## Future Enhancements

### Planned Features

1. **Code Sharing**: Generate shareable links for code snippets
2. **Version History**: Track code changes over time
3. **Collaborative Editing**: Real-time multi-user editing
4. **Test Integration**: Automated testing of code snippets
5. **AI Assistance**: Code completion and suggestions
6. **Package Management**: Import external libraries
7. **Multiple Files**: Support for multi-file projects

### Technical Improvements

1. **WebAssembly Integration**: Client-side execution for some languages
2. **Language Server Protocol**: Enhanced code intelligence
3. **Plugin Architecture**: Extensible plugin system
4. **Performance Monitoring**: Execution time and resource usage tracking
5. **Accessibility**: Enhanced keyboard navigation and screen reader support

## Conclusion

This interactive code playground system provides a robust, flexible foundation for educational and documentation websites. Its language-agnostic design, extensive customization options, and performance optimizations make it suitable for a wide range of use cases while maintaining excellent user experience.

The modular architecture allows for easy extension and customization, making it a valuable tool for any platform that needs interactive code examples.
