import FormForRequest from "@/common/components/FormForRequest";

interface Post {
    title: string,
    body: string
}

export default function Page(params : any) {
    const { category, product } = params;

    console.log(product);

    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <h2>Enter info</h2>
            <FormForRequest/>
        </div>
    )
}

export function generateStaticParams() {
    return [
        { category: 'a', product: '1' },
        { category: 'b', product: '2' },
        { category: 'c', product: '3' },
    ]
}