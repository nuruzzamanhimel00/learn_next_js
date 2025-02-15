export default function PhotoFeedLayout({ children, modal }) {
    return (
        <div>
            
            {children}
            <div>
            {modal}
            </div>
        </div>
    )
}