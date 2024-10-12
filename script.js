const apiBaseUrl = 'http://localhost:5000/api'; // Make sure your server is running on this URL

// Add Member Function
async function addMember() {
    const name = document.getElementById('memberName').value;
    const age = document.getElementById('memberAge').value;
    const roomNumber = document.getElementById('memberRoom').value;

    try {
        const response = await fetch(`${apiBaseUrl}/members`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, age, roomNumber })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const result = await response.json();
        alert(`Member Added: ${result.name}`);
        clearMemberForm(); // Clear form after adding
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('Error adding member. Please check the console for more details.');
    }
}

// Clear Member Form Function
function clearMemberForm() {
    document.getElementById('memberName').value = '';
    document.getElementById('memberAge').value = '';
    document.getElementById('memberRoom').value = '';
}

// Get All Members Function
async function getMembers() {
    try {
        const response = await fetch(`${apiBaseUrl}/members`);

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const members = await response.json();
        const memberList = document.getElementById('memberList');
        memberList.innerHTML = ''; // Clear previous entries

        const ul = document.createElement('ul');
        members.forEach(member => {
            const li = document.createElement('li');
            li.innerText = `Name: ${member.name}, Age: ${member.age}, Room: ${member.roomNumber}, Joined: ${new Date(member.joinDate).toLocaleDateString()}`;
            ul.appendChild(li);
        });

        memberList.appendChild(ul);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('Error fetching members. Please check the console for more details.');
    }
}

// Add Visitor Function
async function addVisitor() {
    const name = document.getElementById('visitorName').value;
    const visitingMemberId = document.getElementById('visitingMemberId').value;

    try {
        const response = await fetch(`${apiBaseUrl}/visitors`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, visitingMemberId })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const result = await response.json();
        alert(`Visitor Added: ${result.name}`);
        clearVisitorForm(); // Clear form after adding
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('Error adding visitor. Please check the console for more details.');
    }
}

// Clear Visitor Form Function
function clearVisitorForm() {
    document.getElementById('visitorName').value = '';
    document.getElementById('visitingMemberId').value = '';
}

// Get All Visitors Function
async function getVisitors() {
    try {
        const response = await fetch(`${apiBaseUrl}/visitors`);

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const visitors = await response.json();
        const visitorList = document.getElementById('visitorList');
        visitorList.innerHTML = ''; // Clear previous entries

        const ul = document.createElement('ul');
        visitors.forEach(visitor => {
            const li = document.createElement('li');
            li.innerText = `Visitor: ${visitor.name}, Visiting Member ID: ${visitor.visitingMemberId}, Visit Date: ${new Date(visitor.visitDate).toLocaleDateString()}`;
            ul.appendChild(li);
        });

        visitorList.appendChild(ul);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('Error fetching visitors. Please check the console for more details.');
    }
}
