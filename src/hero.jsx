import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import photo1 from "./images/image-product-1.jpg"
import photo2 from "./images/image-product-2.jpg"
import photo3 from "./images/image-product-4.jpg"
import photo4 from "./images/image-product-3.jpg"

function Hero () {
    

    const price = 125

    // IMAGE STATE

    const images = [photo1, photo2, photo3, photo4];

    console.log(images)
    const [current, setCurrent] = useState(0)

    const [isCart, setIsCart] = useState(false);

    const handleCart = () => {
        setIsCart(!isCart);
        if(cartCount > 0) {
            setCartEmpty(false)
            setCartNotempty(true)
        }
    }

    const handleSwitch = (current) => {
        setCurrent(current);
    }

    // CART STATES
    const [cartEmpty, setCartEmpty] = useState(true);
    const[cartNotempty, setCartNotempty] = useState(false)

    const [count, setCount] = useState(0);
        const [cartCount, setCartCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    }

    const handleDecrease = () => {
        setCount((e)=>e !== 0 ? e - 1 : 0 );
    }

    const handleAddcart = () => {
        if(count > 1) {
            setCartCount(cartCount + 1);
        } else {
            alert('Kindly add an item to your cart!!!')
        }
    }

    const handleDelete = () => {
        setCartNotempty(false)
        setCartEmpty(true)
    }

    // NAV STATE
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div>
            <div className="h-20 w-5/6 bg-white overflow-visible border-b-2 border-gray-300 mx-auto flex justify-between">
            <div className='md:hidden block mt-6' onClick={handleNav}>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
        <div className="md:mt-4 mt-6">
            <h2 className='md:text-3xl text-xl font-bold text-black text-left'>Sneakers</h2>
        </div>
        <div className="mt-6 hidden md:block">
            <ul className="flex gap-4 text-gray-700 text-base">
                <li>
                    <a href="#">Collection</a>
                </li>
                <li>
                    <a href="#">Women</a>
                </li>                    <li>
                    <a href="#">Men</a>
                </li>                    <li>
                    <a href="#">About</a>
                </li>                    <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
        <div className="flex gap-6">
            <div onClick={handleCart} className='block mt-2'>
            <button  className='bg-orange-500 ml-4 rounded-full h-6 w-6 text-white text-center'>{cartCount}</button>
                <img className='md:h-6 md:w-12' src="/images/icon-cart.svg" alt=" " />
            </div>
            <img className='md:h-10 h-10 mt-4 md:w-12' src="/images/image-avatar.png" alt=" " />
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full mt-14  bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <li className='pt-8 pl-8 text-black text-xl font-bold'>Collections</li>
          <li className='pt-4 pl-8 text-black font-semibold text-base'>Men</li>
          <li className='pt-4 pl-8 text-black font-semibold text-base'>Women</li>
          <li className='pt-4 pl-8 text-black font-semibold text-base'>About</li>
          <li className='pt-4 pl-8 text-black font-semibold text-bas'>Contact</li>
      </ul>
    </div>
    {/* HERO SECTION */}
    <div className={isCart ? 'md:w-5/6 w-3/4 mx-auto absolute' : 'hidden'}>
    <div className='h-52 bg-white md:w-56 md:shadow-xl md:shadow-gray-300 mx-auto md:mt-0 mt-6 md:float-right'>
        <h1 className='text-gray-800 text-xl pl-6 pb-4 pt-4 font-bold border-b-4 border-gray-400'>Cart</h1>
        <div className='w-full mx-auto bg-transparent mt-6'>
            {cartEmpty &&
                <h1 className='text-xl font-semibold text-gray-600 text-center'>Your cart is empty.</h1>
            }
            <div className='block'>
                
            </div>
            {cartNotempty &&
            
            <div>
                <div className='flex md:gap-4 gap-2 flex-row'>
                    <div>
                        <img className="ml-2 h-12 w-12" src="images/image-product-4-thumbnail.jpg" alt=" " />
                    </div>
                    <div>
                        <h1 className='text-gray-600 text-sm'>Fall Limited Edition Sneakers</h1>
                        <h1 className='text-gray-600 text-sm'>${price} * {count} = {price * count}</h1>
                    </div>
                    <div>
                        <button onClick={handleDelete}>
                        <img src='images/icon-delete.svg' alt=' ' className='pt-2 pr-2'/>
                        </button>
                    </div>
                </div>
                <button className='w-full mt-2 h-12 bg-orange-500'>
                    <h1 className='text-base text-white font-semibold'>Checkout</h1>
                </button>
            </div>
            }
        </div>
    </div>
    </div>
        <div className="grid md:mt-16  mt-8 md:h-96 h-auto md:grid-cols-2 w-screen md:w-5/6 md:mx-auto bg-white">
            <div className="h-full">
                <img className="h-96 md:w-[70%] w-full md:rounded-2xl" src={images[current]} alt=" " />
                <div className="gap-12 hidden md:flex mt-4">
                    <button onClick={()=>handleSwitch(0)}>
                    <img className={current === 0 ? 'border-4 border-orange-600 opacity-60 h-16 w-16 rounded-2xl' : "h-16 w-16 rounded-2xl"} src="./images/image-product-1-thumbnail.jpg" alt=" " />
                    </button>
                    <button onClick={()=>handleSwitch(1)}>
                    <img className={current === 1 ? 'border-4 border-orange-600 opacity-60 h-16 w-16 rounded-2xl' : "h-16 w-16 rounded-2xl"} src="./images/image-product-2-thumbnail.jpg" alt=" " />
                    </button>
                    <button onClick={()=>handleSwitch(2)}>
                    <img className={current === 2 ? 'border-4 border-orange-600  opacity-60 h-16 w-16 rounded-2xl' : "h-16 w-16 rounded-2xl"} src="./images/image-product-4-thumbnail.jpg" alt=" " />
                    </button>
                    <button onClick={()=>handleSwitch(3)}>
                    <img className={current === 3 ? 'border-4 border-orange-600  opacity-60 h-16 w-16 rounded-2xl' : "h-16 w-16 rounded-2xl"} src="./images/image-product-3-thumbnail.jpg" alt=" " />
                    </button>
                </div>
            </div>
            <div className="h-full w-5/6 mx-auto">
                <div className="h-80 mt-6">
                    <h1 className="text-xl text-orange-500 font-semibold">Sneaker Company</h1>
                    <h1 className="text-4xl mt-4 text-black font-bold">Fall Limited Edition <br /> Sneakers</h1>
                    <p className="text-base mt-4 text-gray-500">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer. </p>
                    <div classNamoe='md:block flex'>
                        <h4 className="text-3xl text-black font-bold mt-4">${price} <span className="mb-2"><button className="bg-orange-200 h-6 mb w-8 text-orange-700 text-sm">50%</button></span></h4>
                        <h5 className="text-xl text-gray-400 line-through">$250</h5>
                    </div>
                    <div className='grid md:grid-cols-2 gap-4 mt-4'>
                    <div className="md:w-40 w-full h-16  bg-gray-200 flex justify-evenly">
                        <button onClick={handleDecrease} className="text-3xl text-orange-500 font-bold"><img src='/images/icon-minus.svg' alt=' ' /></button>
                        <h4 className="text-2xl pt-4 text-black font-bold">{count}</h4>
                        <button onClick={handleIncrease} className="text-3xl text-orange-500"><img src='/images/icon-plus.svg' alt=' ' /></button>
                    </div>
                        <button onClick={handleAddcart} className='mb-6 md:w-56 w-full h-16 flex items-center justify-center gap-4 rounded-lg shadow-2xl shadow-orange-400 bg-orange-500'>
                            <img className=' h-4 w-6 text-white' src="/images/icon-cart.svg" alt=" " />
                            <h1 className='text-base text-white font-semibold'>Add to Cart</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
// BUILT FROM SCRATCH BY KAYTWOLEA +23490366228765......
    );
}

export default Hero;