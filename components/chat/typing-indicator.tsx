export const TypingIndicator = () => {
    return (
        <div className="flex gap-1 items-center py-1">
            <span className="w-1 h-1 bg-surface rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
            <span className="w-1 h-1 bg-surface rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
            <span className="w-1 h-1 bg-surface rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
        </div>
    )
}