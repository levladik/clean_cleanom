import { Leaf } from 'lucide-react'

const Header = () => {
  const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#thefeatures' },
    { name: 'How It Works', href: '#steps' },
    { name: 'Work Examples', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#FAQ' },
    { name: 'Contacts', href: '#contacts' },
  ]

  return (
    <div className="navbar fixed z-50 bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            className="btn btn-ghost lg:hidden"
            role="button"
            tabIndex={0}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {' '}
              <path
                d="M4 6h16M4 12h8m-8 6h16"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />{' '}
            </svg>
          </div>
          <ul
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            tabIndex={0}
          >
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className="flex items-center text-xl px-5 cursor-pointer font-bold">
          Clean <span className="text-primary">CLeanom</span>
          <span>
            <Leaf className="text-primary ml-1" />
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary rounded-2xl">Button</a>
      </div>
    </div>
  )
}

export default Header
