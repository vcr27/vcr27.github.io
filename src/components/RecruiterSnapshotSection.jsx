import { recruiterSnapshot } from '../data/portfolioData';

function RecruiterSnapshotSection() {
  return (
    <section id="snapshot" className="section reveal" data-reveal="true">
      <div className="section-head">
        <p className="section-eyebrow">Start Here</p>
        <h2>Why I Can Contribute Quickly</h2>
      </div>

      <div className="recruiter-list">
        {recruiterSnapshot.map((item) => (
          <article className="recruiter-item" key={item.heading}>
            <h3>{item.heading}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RecruiterSnapshotSection;
