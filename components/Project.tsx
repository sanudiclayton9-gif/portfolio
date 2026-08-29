type Stat = { value: string; label: string };

type ProjectProps = {
  category: string;
  year: string;
  name: string;
  coverClass: "proj-green" | "proj-blue" | "proj-amber";
  tags: string;
  title: string;
  challenge: string;
  outcome: string;
  stats: [Stat, Stat];
};

export default function Project({
  category,
  year,
  name,
  coverClass,
  tags,
  title,
  challenge,
  outcome,
  stats,
}: ProjectProps) {
  return (
    <article className="project">
      <div className={`project-cover ${coverClass}`}>
        <div className="project-meta">
          <span>{category}</span>
          <span>{year}</span>
        </div>
        <div className="project-name">{name}</div>
      </div>
      <div className="project-body">
        <div className="project-tags">{tags}</div>
        <h3>{title}</h3>
        <div className="project-cols">
          <div>
            <h4>The challenge</h4>
            <p>{challenge}</p>
          </div>
          <div>
            <h4>The outcome</h4>
            <p>{outcome}</p>
          </div>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
