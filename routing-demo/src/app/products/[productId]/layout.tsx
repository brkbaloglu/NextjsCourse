export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode
}){
    return (
        <div>
            {children}
            <h2>Features product</h2>
        </div>
    )
}