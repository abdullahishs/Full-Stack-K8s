document.addEventListener('DOMContentLoaded', () => {
    const goals = document.querySelectorAll('.goal');
    const goalTitle = document.getElementById('goal-title');
    const goalDescription = document.getElementById('goal-description');

    // Goal descriptions (can be loaded from a separate JSON file)
    const goalData = {
        1: {
            title: "Ramires vs Barcelona",
            date: "24th April 2012",
            scorer: "Ramires",
            assisted_by: "Frank Lampard",
            description: [
                '',
                "Ramires goal against Barcelona came during the second leg of the UEFA Champions League semi-final on April 24, 2012. Chelsea were trailing 2-1 on aggregate when Ramires scored just before half-time. The move started with Frank Lampard, who played a precise through-ball to Ramires. The Brazilian midfielder made a lung-busting run and, upon receiving the pass, delicately chipped the ball over the onrushing Barcelona goalkeeper, Victor Valdés, to level the score at 2-2."
            ]
        },
        2: {
            title: "Fernando Torres vs Barcelona",
            date: "24th April 2012",
            scorer: "Fernando Torres",
            assisted_by: "Ashley Cole",
            description: [
                "Fernando Torres goal against Barcelona came in the dying moments of the 2012 UEFA Champions League semi-final. Chelsea, already down to 10 men after John Terry's red card, were defending a 2-2 aggregate score with the advantage of away goals. In stoppage time, Torres, who had come on as a substitute, broke free on a counter-attack. He rounded the goalkeeper, Victor Valdés, and calmly slotted the ball into the empty net, securing a 3-2 aggregate victory for Chelsea. This goal sealed Chelseas place in the final."
            ]
        },
        3: {
            title: "Drogba vs Bayern Munich",
            date: "19th May 2012",
            scorer: "Didier Drogba",
            assisted_by: "Juan Mata",
            description: [
                "Didier Drogba's goal against Bayern Munich in the 2012 UEFA Champions League final was a defining moment. With Chelsea trailing 1-0 and just minutes left in regular time, Drogba scored a powerful header from a corner kick in the 88th minute, leveling the score at 1-1. This goal forced the match into extra time and eventually a penalty shootout, where Chelsea emerged victorious to win their first Champions League trophy"
            ]
        }
    };

    goals.forEach(goal => {
        const video = goal.querySelector('video');
        const goalId = goal.getAttribute('data-goal');
    
        // Hover Preview
        goal.addEventListener('mouseenter', () => {
            video.play();
            // Update title and fields
            goalTitle.innerText = goalData[goalId].title;
        
            // Create HTML for the description
            const date = goalData[goalId].date;
            const scorer = goalData[goalId].scorer;
            const assistedBy = goalData[goalId].assisted_by;
            const description = goalData[goalId].description.join('<br>');
        
            // Update the description box content
            goalDescription.innerHTML = `
                <div class="goal-info">
                    <strong>Date:</strong> ${date}<br>
                    <strong>Goal Scorer:</strong> ${scorer}<br>
                    <strong>Assisted by:</strong> ${assistedBy}
                </div>
                <div class="goal-details">${description}</div>
            `;
        });
        
        goal.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
            video.load(); // Reset to thumbnail (poster image)
    
            // Reset the description box to default
            goalTitle.innerText = "Hover over a goal for details";
            goalDescription.innerText = "(Click the video if you want to hear the commentary)";
        });
    
        // Play full video on click
        goal.addEventListener('click', () => {
            video.currentTime = 0; // Start from the beginning
            video.play();
            video.muted = false;   // Unmute when playing full video
        });
    });
    
});