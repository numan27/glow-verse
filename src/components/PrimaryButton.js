import { Button } from '@material-tailwind/react'
import React from 'react'

const PrimaryButton = () => {
    return (
        <div>
            <Button className="bg-[#e78956] hover:bg-[#74322c] focus:bg-[#74322c]">
                Start your Quiz
            </Button>
        </div>
    )
}

export default PrimaryButton