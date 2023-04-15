import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { FoodInput, FoodsInterface } from '../../pages/Dashboard';

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: FoodsInterface;
  handleUpdateFood: (food: FoodInput) => Promise<void>;
}

export function ModalEditFood({ isOpen, setIsOpen, editingFood, handleUpdateFood }: ModalAddFoodProps) {
  async function handleSubmit(data: FoodInput) {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
}
