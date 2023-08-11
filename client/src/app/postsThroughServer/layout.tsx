import MyHeader from "@/common/components/UI/MyHeader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <MyHeader/>
            {children}
        </div>
    )
}