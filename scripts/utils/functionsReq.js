async function order(url, id = null) {
    try {
        let way;

        if (id !== null) {
            way = `${url}/?priority=${id}`;
        } else {
            way = url;
        }

        const response = await fetch(way, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Erro de rede: ${response.status}`);
        }

        const json = await response.json();

        return json;

    } catch (err) {
        throw err;
    }
}

async function getConfig(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Erro de rede: ${response.status}`);
        }

        const json = await response.json()

        return json

    } catch (err) {
        throw err
    }
}

async function addTaskBack(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error(`Erro de rede: ${response.status}`);
        }

        const responseData = await response.json()

        return responseData
    } catch (err) {
        throw err
    }

}

async function updateTaskBack(url, id, data, determinate) {
    try {
        let methodUpdate;
        let way;

        if (determinate == 0) {
            methodUpdate = 'PATCH'
            way = `${url}/${id}`

        }
        else if (determinate == 1) {
            methodUpdate = 'PUT'
            way = `${url}/${id}`

        } else if (determinate == 2) {
            methodUpdate = 'PATCH'
            way = url
        }

        const response = await fetch(way, {
            method: methodUpdate,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error(`Erro de rede: ${response.status}`);
        }

        const responseData = await response.json()

        return responseData

    } catch (err) {
        throw err
    }
}

async function deleteTaskBack(url, id) {
    try {
        let way = `${url}/${id}`
        const response = await fetch(way, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error(`Erro de rede: ${response.status}`);
        }

        const responseData = await response.json()

        return responseData

    } catch (err) {
        throw err
    }
}

export { deleteTaskBack, updateTaskBack, addTaskBack, getConfig, order }