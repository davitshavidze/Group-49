const form = document.getElementById('registration-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // ფორმის ავტომატური გაგზავნის დაბლოკვა
            
            const name = document.getElementById('name').value;
            localStorage.setItem('userName', name); // მომხმარებლის სახელის შენახვა
            
            window.location.href = 'site.html'; // გადამისამართება ახალ გვერდზე
        });
