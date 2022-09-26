import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AddEditBartendersPage from '../../../../pages/EditBartendersPage/AddEditBartendersPage';
import { addDataModalActions } from '../../../../store/add-data-modal-slice';

export const AddUpdateDataModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModalHandler = () => {
    dispatch(addDataModalActions.close());
    navigate('/team-dashboard');
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
          <AddEditBartendersPage />
        </div>
      </div>
    </div>
  );

  return createPortal(
    modalContent,
    document.getElementById('add-update-modal-root')
  );
};
