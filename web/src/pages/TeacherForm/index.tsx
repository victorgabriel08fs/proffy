import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css'

import warningIcon from '../../assets/images/icons/warning.svg';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

const TeacherForm = () => {


    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');





    const [scheduleItems, setScheduleItems] = useState([{
        week_day: 0,
        from: '',
        to: ''
    }]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }
            return scheduleItem;
        });
        setScheduleItems(updatedScheduleItems);
        console.log(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Sucesso!');
        })
            .catch(() => {
                alert('Erro!');
            })

    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas." description="O primeiro passo é preencher esse formulário de inscrição." />

            <main>
                <form onSubmit={handleCreateClass} >
                    <fieldset>
                        <legend>
                            Seus Dados
                    </legend>
                        <Input name="name" value={name} onChange={(e) => { setName(e.target.value) }} label="Nome completo" />
                        <Input name="avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} label="Avatar" />
                        <Input value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} name="whatsapp" label="WhatsApp" />
                        <Textarea name="bio" value={bio} onChange={(e) => { setBio(e.target.value) }} label="Biografia" />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Sobre a aula
                    </legend>
                        <Select name="subject" label="Matéria" value={subject} onChange={(e) => { setSubject(e.target.value) }} options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Geografia', label: 'Geografia' },
                        ]} />
                        <Input name="cost" value={cost} onChange={(e) => { setCost(e.target.value) }} label="Custo da hora/aula" />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                    <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select name="week_day" label="Dia da semana" value={scheduleItem.week_day} onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)} options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda-feira' },
                                        { value: '2', label: 'Terça-feira' },
                                        { value: '3', label: 'Quarta-feira' },
                                        { value: '4', label: 'Quinta-feira' },
                                        { value: '5', label: 'Sexta-feira' },
                                        { value: '6', label: 'Sabado' },

                                    ]} />
                                    <Input name="from" label="Das" value={scheduleItem.from} onChange={e => setScheduleItemValue(index, 'from', e.target.value)} type="time" />
                                    <Input name="to" label="Até" value={scheduleItem.to} onChange={e => setScheduleItemValue(index, 'to', e.target.value)} type="time" />

                                </div>
                            );
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os campos.
                    </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;