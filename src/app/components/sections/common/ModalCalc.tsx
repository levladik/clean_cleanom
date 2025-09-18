import { forwardRef } from 'react'

import AddonsList from '../calculator/AddonsList'
import AreaPicker from '../calculator/AreaPicker'

interface ModalCalcProps {
  onOrder?: () => void
}

const ModalCalc = forwardRef<HTMLDialogElement, ModalCalcProps>(({ onOrder }, ref) => {
  return (
    <dialog
      ref={ref}
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box flex flex-col items-start gap-3">
        <h3 className="text-xl">Dynamic Cleaning Type</h3>
        <p className="text-sm mb-2 opacity-70">Chose details and we call you back</p>{' '}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <AreaPicker />
        <AddonsList />
        <button
          className="btn btn-primary rounded-full"
          onClick={onOrder}
        >
          Order
        </button>
      </div>
    </dialog>
  )
})

ModalCalc.displayName = 'ModalCalc'

export default ModalCalc
