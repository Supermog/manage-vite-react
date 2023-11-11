export const buttonVariant = Object.freeze({
  primary: {
    button:
      'bg-indigo-500 hover:bg-brand-alt-700 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-white',
    icon: '',
  },
  secondary: {
    button:
      'bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
    icon: '',
  },
  tertiary: {
    button:
      'bg-white hover:bg-gray-50 focus-visible:bg-white text-gray-700 border-[1px] border-gray-300',
    icon: '',
  },
  error: {
    button:
      'bg-red-500 hover:bg-red-700 hover:border-red-700 focus-visible:bg-red-600 focus-visible:border-red-600 text-white border-[1px] border-red-500',
    icon: '',
  },
});

export const buttonSize = Object.freeze({
  xs: 'py-[7px] px-[11px] text-xs leading-4 h-fit',
  sm: 'py-[9px] px-[13px] text-sm leading-4 h-fit',
  base: 'py-[9px] px-[17px] text-sm leading-5 h-fit',
  l: 'py-[9px] px-[17px] text-base leading-6 h-fit',
  xl: 'py-[13px] px-[25px] text-base leading-6 h-fit',
});
