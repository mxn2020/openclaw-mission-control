import { Users, Plus } from "lucide-react";
import { Button, Card } from "@geenius-ui/react-css";
import "./TeamsPage.css";

export default function TeamsPage() {
    return (
        <div className="teams-page">
            <div className="dashboard-header-bar">
                <div>
                    <h1>Teams</h1>
                    <p>Assemble agent teams with an orchestrator at the helm</p>
                </div>
                <Button variant="primary" icon={<Plus size={16} />}>
                    New Team
                </Button>
            </div>

            <Card className="teams-empty" padding="xl">
                <div className="teams-empty-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                    <Users size={48} />
                </div>
                <h3 style={{ textAlign: 'center', marginBottom: 8 }}>No teams yet</h3>
                <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginBottom: 24, maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
                    Create a team by selecting an orchestrator agent and adding specialists.
                    The orchestrator will coordinate all work within the team.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="primary" icon={<Plus size={16} />}>
                        Create Your First Team
                    </Button>
                </div>
            </Card>
        </div>
    );
}
