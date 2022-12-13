import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';

function AddToCart({ product }) {
	// console.log(product)
	const { id, colors, stock, price, name } = product;
	const [color, setColor] = useState(colors[0]);
	const [quantity, setQuantity] = useState(1);

	const addToCart = () => {
		let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
		const findItem = cartItems.find(item => item.id === id + color)

		if (!findItem) {
			cartItems.push({
				id: id + color,
				color,
				price,
				image: product.image[0].url,
				name,
				quantity,
			})
			localStorage.setItem('cartItems', JSON.stringify(cartItems))
			return
		}

		for (let i = 0; i < cartItems.length; i++) {
			if (cartItems[i].id === id + color) {
				cartItems[i] = {
					...cartItems[i],
					quantity: cartItems[i].quantity + quantity
				}
			}
		}
		localStorage.setItem('cartItems', JSON.stringify(cartItems))


	}

	return (
		<div>
			<div className='flex items-center space-x-2'>
				<span>Colors:</span>
				{product &&
					product.colors.map(productColor => (
						<button
							onClick={() => { setColor(productColor) }}
							key={productColor}
							style={{
								backgroundColor: productColor,
							}}
							className={`h-4 aspect-square rounded-full `}>
							{color === productColor && <TiTick className='text-white' />}
						</button>
					))
				}
			</div>


			<div className='flex space-x-2 items-center'>
				<button
					disabled={quantity === 1}
					onClick={() => {
						quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
					}}
					className='p-2 disabled:opacity-50'>
					<AiOutlineMinus className='text-xl' />
				</button>

				<span>{quantity}</span>

				<button
					disabled={quantity === stock}
					onClick={() => {
						quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock)
					}}
					className='p-2 disabled:opacity-50 '>
					<AiOutlinePlus className='text-xl' />
				</button>
			</div>
			<button
				onClick={addToCart}
				className='btn'>
				Add to Cart
			</button>
		</div>
	)
}

export default AddToCart