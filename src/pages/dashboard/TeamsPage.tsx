import { Users, Plus } from "lucide-react";
import "./TeamsPage.css";

export default function TeamsPage() {
    return (
        <div className="teams-page">
            <div className="dashboard-header-bar">
                <div>
                    <h1>Teams</h1>
                    <p>Assemble agent teams with an orchestrator at the helm</p>
                </div>
                <button className="btn btn-primary">
                    <Plus size={16} /> New Team
                </button>
            </div>

            <div className="teams-empty glass-card">
                <div className="teams-empty-icon">
                    <Users size={48} />
                </div>
                <h3>No teams yet</h3>
                <p>
                    Create a team by selecting an orchestrator agent and adding specialists.
                    The orchestrator will coordinate all work within the team.
                </p>
                <button className="btn btn-primary">
                    <Plus size={16} /> Create Your First Team
                </button>
            </div>
        </div>
    );
}
