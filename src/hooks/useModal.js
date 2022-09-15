import { useState } from "react"

export const useModal = (initialValue = 'hidden') => {
    const [isOpen, setIsOpen] = useState(initialValue);

    const openModal = () => setIsOpen('block');
    const closeModal = () => setIsOpen('hidden')

    return [isOpen, openModal, closeModal];
}