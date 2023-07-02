import Image from "next/image"
import formatPrice from "@/util/PriceFormat"
import { ProductType } from "@/types/ProductType"
import Link from "next/link"

export default function Product({
    name, 
    image, 
    unit_amount, 
    id, 
    description,
}: ProductType) {
    const queryId = id;
    return(
        <Link 
            href={{
                pathname: `/product/${id}`,
                query: {name, image, unit_amount, queryId, description}}}>
            <div>
                {/* you can also put w-full for width in classname or Image */}
                <Image 
                    src={image} 
                    alt={name} 
                    width={800} 
                    height={800} 
                    priority={true}
                    className="w-96 h-96 object-cover rounded-lg" 
                />
                <div className="font-medium py-2">
                    <h1>{name}</h1>
                    <h2 className="text-sm text-primary">{unit_amount !== null ? formatPrice(unit_amount) : 'N/A'}</h2>
                </div>
            </div>
        </Link>
    )
}