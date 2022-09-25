const DeleteAllModal = ({ setMainList }) => {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div id="delete-all-modal" class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Are you sure?
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">Deleting all tasks cannot be undone!</div>
          <div class="modal-footer">
            <button
              onClick={() => {
                setMainList([]);
              }}
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Delete all tasks
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAllModal;
