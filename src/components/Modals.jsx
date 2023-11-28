export default ({ member, handleClose, handlePrevious, handleNext }) => {
  return (
    <dialog id="modal-member" open>
      <article>
        <a href="#close"
          aria-label="Close"
          className="close"
          data-target="modal-member"
          onClick={handleClose}
        ></a>
        <hgroup>
          <div style={{
            display: "flex",
            gap: '1rem'
          }}>
            <img style={{ width: '200px' }}
              src={`images/${member.slug}.svg`}
              alt={member.name} />
            <hgroup>
              <h1>{member.name}</h1>
              <p>{member.bio}</p>              
              <hgroup style={{marginTop:'20px'}}>
                <p> 
                <a href="#" style={{marginRight:'10px', width:200}} role="button" className="outline" 
                  onClick={handlePrevious}>Previous</a>
                <a href="#" style={{marginRight:'10px', width:200}} role="button" className="outline" 
                  onClick={handleNext}>Next</a>
                </p>                  
              </hgroup>
            </hgroup>
          </div>
        </hgroup>
      </article>
    </dialog>
  )
}
