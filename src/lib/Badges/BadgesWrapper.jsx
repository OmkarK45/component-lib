import ComponentHolder from "../../components/Container/ComponentHolder"
import SectionHeader from "../../components/Section/SectionHeader"
import { SolidBadges, OutlineBadges } from "./Badges"

export default function BadgesWrapper() {
  const solidBadges = `.badge {
    padding: 5px 10px;
    border-radius: 20px;
    color: white;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 600;
  }
  
  .badge-success {
    background-color: #38a169;
  }
  .badge-error {
    background-color: #e53e3e;
  }
  .badge-info {
    background-color: #3182ce;
  }
  .badge-warning {
    background-color: #dd6b20;
  }`
  const outLineBadges = `.badge {
    padding: 5px 10px;
    border-radius: 20px;
    color: white;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 600;
  }
  .badge-outline-success {
    color: #38a169;
  border: 2px solid #38a169;
}
.badge-outline-error {
    color: #e53e3e;
  border: 2px solid #e53e3e;
}
.badge-outline-info {
    color: #3182ce;
  border: 2px solid #3182ce;
}
.badge-outline-warning {
    color: #dd6b20;
  border: 2px solid #dd6b20;
}

  
  `
  return (
    <div>
      <SectionHeader
        title="Badges"
        description="Badges are used to highlight an item's status for quick recognition."
      />
      <ComponentHolder title="Badges" code={solidBadges}>
        <SolidBadges />
      </ComponentHolder>
      <ComponentHolder title="Outline Badges" code={outLineBadges}>
        <OutlineBadges />
      </ComponentHolder>
    </div>
  )
}
