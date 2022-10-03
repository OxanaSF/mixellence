import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AddEditBartendersPage from '../../../../pages/EditBartendersPage/AddEditBartendersPage';
import EditServicesPage from '../../../../pages/EditServicesPage/EditServicesPage';
import EditTestimonials from '../../../../pages/EditTestimonials/AddEditTestimonials';
import EditDrinks from '../../../../pages/EditDrinks/EditDrinks';
import EditHero from '../../../../pages/EditHero/EditHero';
import { addDataModalActions } from '../../../../store/add-data-modal-slice';

export const AddUpdateDataModal = () => {
  const returnLink = useSelector((state) => state.addDataModal.returnLink);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModalHandler = () => {
    dispatch(addDataModalActions.close());
    navigate(returnLink);
  };

  const modalContent = (
    <div className="modalDiv">
      <div className="modal">
        <div className="modalWrapper">
          <button className="modalCancelBtn" onClick={closeModalHandler}>
            <img
              src={`${process.env.PUBLIC_URL}/images/cancel.png`}
              alt="cancel"
            />
          </button>

          {returnLink === '/hero-dashboard' && <EditHero />}
          {returnLink === '/team-dashboard' && <AddEditBartendersPage />}
          {returnLink === '/services-dashboard' && <EditServicesPage />}
          {returnLink === '/testimonials-dashboard' && <EditTestimonials />}
          {returnLink === '/drinks-dashboard' && <EditDrinks />}
        </div>
      </div>
    </div>
  );

  return createPortal(
    modalContent,
    document.getElementById('add-update-modal-root')
  );
};

export default AddUpdateDataModal;
