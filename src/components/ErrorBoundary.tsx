import { Component, type ReactNode } from "react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#FAF8F2] p-8">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-6 text-[#D4AF37] font-display italic">A♡F</div>
            <p className="text-[#6B6B6B] font-serif text-lg">Something went wrong. Please refresh the page.</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
